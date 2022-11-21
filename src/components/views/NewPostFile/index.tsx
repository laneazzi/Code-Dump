import React, { useEffect, useState } from 'react';

import { CloseCircleIcon, FileIcon } from 'assets/icons';

import styles from './NewPostFile.module.scss';

const NewPostFile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);

  const changeHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const updatedFile = target.files && target.files[0];
    setFile(updatedFile);
  };

  const deleteFile = () => setFile(null);

  useEffect(() => {
    const fileReader = new FileReader();

    if (file) {
      fileReader.onload = () => {
        setFileDataURL(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    } else {
      setFileDataURL(null);
    }

    return () => {
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className={styles.container}>
      <div className={styles.container__content__wrapper}>
        <div className={styles.container__content}>
          <p>Attach File...</p>
        </div>
        <div className={styles.container__content__file}>
          {!file ? (
            <label className={styles.container__content__file__label}>
              <FileIcon />
              <input accept='.png, .jpg, .jpeg, .svg' onChange={changeHandler} type='file' />
            </label>
          ) : (
            <>
              <CloseCircleIcon
                className={styles.container__content__file_close}
                onClick={deleteFile}
              />
              <img src={fileDataURL as string} alt='event-img'></img>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPostFile;
