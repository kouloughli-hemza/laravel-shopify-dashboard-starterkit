import React, { useCallback, useState } from 'react';
import { Stack, Banner, Caption, DropZone, List, Thumbnail } from '@shopify/polaris';

/**
 * Allows Users to upload Image
 *
 * @returns {*}
 * @constructor
 */
const FileUploader = ({ files, rejectedFiles, hasError, handleDrop }) => {
  const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail size="small" alt={file.name} source={window.URL.createObjectURL(file)} />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );

  const errorMessage = hasError && (
    <Banner title="The following images couldn’t be uploaded:" status="critical">
      <List type="bullet">
        {rejectedFiles.map((file, index) => (
          <List.Item key={index}>
            {`"${file.name}" is not supported. File type must be .gif, .jpg, .png or .svg.`}
          </List.Item>
        ))}
      </List>
    </Banner>
  );

  return (
    <Stack vertical>
      {errorMessage}
      <DropZone allowMultiple={true} accept="image/*" type="image" onDrop={handleDrop}>
        {uploadedFiles}
        {fileUpload}
      </DropZone>
    </Stack>
  );
};
export default FileUploader;
