/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : DeleteDialog.js
 *  *  * Date :  11/15/20, 3:59 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React from 'react';
import { Modal, Stack, DisplayText, TextStyle } from '@shopify/polaris';
import { useSelector } from 'react-redux';

const DeleteDialog = ({ deleteDialogOpen, handleDeleteDialog, handleDelete }) => {
  const filesStore = useSelector((state) => state.media);

  return (
    <Modal
      open={deleteDialogOpen}
      onClose={() => handleDeleteDialog(false)}
      loading={filesStore.isLoading}
      title="Delete Designs"
      primaryAction={{
        content: 'Delete designs',
        onAction: handleDelete,
        loading: filesStore.isLoading,
        destructive: true,
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: () => handleDeleteDialog(false),
        },
      ]}
    >
      <Modal.Section>
        <Stack vertical>
          <Stack.Item>
            <DisplayText size="small">
              Do your realy want to permanently delete selected Designs ?
            </DisplayText>
              <TextStyle variation="subdued">This action is irreversible</TextStyle>
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  );
};
export default DeleteDialog;
