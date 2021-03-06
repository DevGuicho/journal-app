const fileUpload = async (file) => {
  const cloudUrl = process.env.REACT_APP_CLOUDINARY_URL;
  const formData = new FormData();
  formData.append("upload_preset", "react-journal-app");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};

export default fileUpload;
