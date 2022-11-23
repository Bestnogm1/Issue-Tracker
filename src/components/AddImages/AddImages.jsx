const AddImages = ({ setFile }) => {
  return (
    <>
      <input
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      />
    </>
  );
};

export default AddImages;
