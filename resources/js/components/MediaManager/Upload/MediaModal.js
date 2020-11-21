/*
 *
 *  *
 *  *  * Author : Kouloughli Hemza
 *  *  * FileName : MediaModal.js
 *  *  * Date :  11/13/20, 3:55 PM.
 *  *  * Permission to use, copy, modify, and/or distribute this software for any
 *  *  * purpose with or without fee is NOT ALLOWED, provided that the above
 *  *  * copyright notice and this permission notice appear in all copies.
 *  *  * Copyright (c) 2020
 *  *
 *
 */

import React, { useState, useCallback } from 'react';
import { Modal, Stack } from '@shopify/polaris';
import FileUploader from '../../FileUploader/FileUploader';
import { useDispatch, useSelector } from 'react-redux';
import { startAddMediaRequest } from '../../../store/actions/media/addMedia';

const MediaModal = ({ active, handleModalChange }) => {
  const dispatch = useDispatch();
  const filesStore = useSelector((state) => state.media);
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const hasError = rejectedFiles.length > 0;
  const handleDrop = useCallback((_droppedFiles, acceptedFiles, rejectedFiles) => {
    setFiles((files) => [...files, ...acceptedFiles]);
    setRejectedFiles(rejectedFiles);
  }, []);

  /**
   * Upload Media
   */
  const uploadFile = () => {
    if (hasError || files.length === 0) {
      return false;
    }
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    files.map((file, index) => {
      formData.append(`image[${index}]`, files[index]);
      formData.append(`name[${index}]`, files[index].name);
    });

    // Request made to the backend api
    // Send formData object
    dispatch(startAddMediaRequest(formData, handleModalChange,setFiles));
  };

  return (
    <Modal
      open={active}
      onClose={handleModalChange}
      loading={filesStore.isLoading}
      title="Add Design"
      primaryAction={{
        content: 'Save',
        onAction: uploadFile,
        loading: filesStore.isLoading,
      }}
      secondaryActions={[
        {
          content: 'Cancel',
          onAction: handleModalChange,
        },
      ]}
    >
      <Modal.Section>
        <Stack vertical>
          <Stack.Item>
            <FileUploader
              files={files}
              handleDrop={handleDrop}
              hasError={hasError}
              rejectedFiles={rejectedFiles}
            />
          </Stack.Item>
        </Stack>
      </Modal.Section>
    </Modal>
  );
};
export default MediaModal;
