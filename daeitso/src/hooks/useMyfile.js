export const useMyfile = () => {
  const handleChangeFile = async (e) => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length === 10; i++) {
      formData.append("file", files[i]);
    }
    try {
    } catch (e) {}
  };

  return { handleChangeFile };
};
