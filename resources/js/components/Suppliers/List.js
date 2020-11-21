/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : List.js
 *  *  * Date :  11/8/20, 9:04 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React, { useCallback, useState } from 'react';
import {
  Avatar,
  TextStyle,
  Button,
  Card,
  TextField,
  Filters,
  ResourceItem,
  ResourceList,
  EmptyState,
} from '@shopify/polaris';

const List = ({ suppliers }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState('DATE_MODIFIED_DESC');
  const [taggedWith, setTaggedWith] = useState(null);
  const [queryValue, setQueryValue] = useState(null);

  const handleTaggedWithChange = useCallback((value) => setTaggedWith(value), []);
  const handleQueryValueChange = useCallback((value) => setQueryValue(value), []);
  const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);

  const resourceName = {
    singular: 'supplier',
    plural: 'suppliers',
  };

  const promotedBulkActions = [
    {
      content: 'Edit customers',
      onAction: () => console.log('Todo: implement bulk edit'),
    },
  ];

  const bulkActions = [
    {
      content: 'Add tags',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Remove tags',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete customers',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

  const filters = [
    {
      key: 'taggedWith',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = !isEmpty(taggedWith)
    ? [
        {
          key: 'taggedWith',
          label: disambiguateLabel('taggedWith', taggedWith),
          onRemove: handleTaggedWithRemove,
        },
      ]
    : [];

  const filterControl = (
    <Filters
      queryValue={queryValue}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={handleQueryValueChange}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >
      <div style={{ paddingLeft: '8px' }}>
        <Button onClick={() => console.log('New filter saved')}>Save</Button>
      </div>
    </Filters>
  );

  const emptyStateMarkup =
    !appliedFilters.length && !suppliers.length ? (
      <EmptyState
        heading="Add supplier to get started"
        action={{ content: 'Add supplier' }}
        image="https://cdn.shopify.com/shopifycloud/web/assets/v1/1b665d29619599d4e9524c806600d9b2.svg"
      >
        <p>You can add your first supplier to benifit from the app .</p>
      </EmptyState>
    ) : undefined;
  return (
    <Card>
      <ResourceList
        resourceName={resourceName}
        items={suppliers}
        renderItem={renderItem}
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        promotedBulkActions={promotedBulkActions}
        bulkActions={bulkActions}
        sortValue={sortValue}
        sortOptions={[
          { label: 'Newest update', value: 'DATE_MODIFIED_DESC' },
          { label: 'Oldest update', value: 'DATE_MODIFIED_ASC' },
        ]}
        onSortChange={(selected) => {
          setSortValue(selected);
          console.log(`Sort option changed to ${selected}.`);
        }}
        filterControl={filterControl}
        emptyState={emptyStateMarkup}
      />
    </Card>
  );

  function renderItem(supplier) {
    const { id, name, phone, email } = supplier;
    const media = <Avatar customer size="medium" name={name} />;
    return (
      <ResourceItem
        id={id}
        url={`supplier/${id}`}
        media={media}
        accessibilityLabel={`View details for ${name}`}
        persistActions
      >
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{email}</div>
      </ResourceItem>
    );
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'taggedWith':
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
};

export default List;
