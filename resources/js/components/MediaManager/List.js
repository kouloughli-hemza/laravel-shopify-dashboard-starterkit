/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : List.js
 *  *  * Date :  11/13/20, 3:39 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React, { useCallback, useEffect, useState } from 'react';
import {
  TextStyle,
  Card,
  Filters,
  ResourceItem,
  ResourceList,
  EmptyState,
  Thumbnail,
  Pagination,
  Stack,
} from '@shopify/polaris';
import MediaModal from './Upload/MediaModal';
import { startMediaRequest } from '../../store/actions/media/media';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteMediaRequest } from '../../store/actions/media/deleteMedia';
import DeleteDialog from './DeleteDialog';

const List = ({ modalActive, handleModalChange }) => {
  const dispatch = useDispatch();
  const filesStore = useSelector((state) => state.media);

  const [deleteDialogOpen, setDeleteDialog] = useState(false);

  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState('id');
  const [queryValue, setQueryValue] = useState('');

  const handleDeleteMedia = useCallback(() => {
    dispatch(startDeleteMediaRequest(selectedItems, setDeleteDialog,setPage));
    setSelectedItems([]);
  }, [selectedItems]);

  const handleQueryValueChange = useCallback((value) => {
    setQueryValue(value);
    setPage(1);
  }, []);

  const handleQueryValueRemove = useCallback(() => {
    setQueryValue('');
    setPage(1);
  }, []);

  const handleClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [handleQueryValueRemove]);

  useEffect(() => {
      console.log(window.app)
    dispatch(startMediaRequest(perPage, page, queryValue, sortValue));
  }, [page, perPage, queryValue, sortValue]);

  const resourceName = {
    singular: 'media',
    plural: 'media',
  };

  const promotedBulkActions = [
    {
      content: 'Delete Files',
      onAction: () => setDeleteDialog(true),
    },
  ];

  const filterControl = (
    <Filters
      filters={[]}
      queryValue={queryValue}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    />
  );

  const emptyStateMarkup =
    !filesStore.files.length && !filesStore.isFetching && queryValue === '' ? (
      <EmptyState
        heading="Add Design to get started"
        action={{
          content: 'Add Design',
          onAction() {
            handleModalChange();
          },
        }}
        image="https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png"
      >
        <p>You can add your first Design to benifit from the app .</p>
      </EmptyState>
    ) : undefined;
  return (
    <>
      <Card>
        <ResourceList
          loading={filesStore.isFetching}
          resourceName={resourceName}
          items={filesStore.files}
          renderItem={renderItem}
          selectedItems={selectedItems}
          onSelectionChange={setSelectedItems}
          promotedBulkActions={promotedBulkActions}
          sortValue={sortValue}
          sortOptions={[
            { label: 'Newest Designs', value: 'id' },
            { label: 'Oldest Designs', value: '-id' },
          ]}
          onSortChange={(selected) => {
            setSortValue(selected);
            console.log(`Sort option changed to ${selected}.`);
          }}
          filterControl={filterControl}
          emptyState={emptyStateMarkup}
        />
        <Stack alignment="center">
          <Pagination
            hasPrevious={filesStore.meta?.current_page > 1}
            onPrevious={() => {
              setPage(filesStore.meta?.current_page - 1);
            }}
            hasNext={filesStore.meta?.current_page !== filesStore.meta?.last_page}
            onNext={() => {
              setPage(filesStore.meta?.current_page + 1);
            }}
            plain={false}
          />
        </Stack>
      </Card>
      <MediaModal active={modalActive} handleModalChange={handleModalChange} />
      <DeleteDialog
        deleteDialogOpen={deleteDialogOpen}
        handleDeleteDialog={setDeleteDialog}
        handleDelete={handleDeleteMedia}
      />
    </>
  );

  function renderItem(media) {
    const { id, name, size, path } = media;
    const preview = <Thumbnail source={path} alt={name} />;
    return (
      <ResourceItem
        id={id}
        //url={`media/${id}`}
        media={preview}
        accessibilityLabel={`View details for ${name}`}
        persistActions
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{size}</div>
      </ResourceItem>
    );
  }
};

export default List;
