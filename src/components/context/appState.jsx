import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [footerData, setFooterData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [specialMenuCategory, setSpecialMenuCategory] = useState(null);
const [specialMenuProducts, setSpecialMenuProducts] = useState([]);

  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(false);
const [allProducts, setAllProducts] = useState([]);
const [allCategories, setAllCategories] = useState([]);
const [metaData, setMetaData] = useState({ title: "", description: "" });
const submitOrder = async (formData, cartItems, total, onSuccess) => {
  const orderData = {
    ...formData,
    cartItems: cartItems.map((item) => ({
      title: item.product.title,
      price: item.product.price,
      quantity: item.quantity,
      image: item.product.images[0],
    })),
    total: (total + 100).toFixed(2),
    subtotal: total.toFixed(2),
    shipping: 100,
  };

  try {
    const res = await fetch("http://localhost:8000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (res.ok) {
      toast.success("Order placed successfully!");
      if (onSuccess) onSuccess();
    } else {
      toast.error("Could not send confirmation email.");
    }
  } catch (err) {
    console.error("Order submission error:", err);
    toast.error("Error placing order.");
  }
};

const loginAdmin = async (username, password, onSuccess) => {
  try {
    const res = await axios.post("http://localhost:8000/api/auth/login", {
      username,
      password,
    });

    if (res.data.success) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login successful! Redirecting...");
      if (onSuccess) onSuccess(); // callback to redirect
    } else {
      toast.error("Invalid credentials");
    }
  } catch (err) {
    console.error("Login error:", err);
    if (err.response?.data?.msg) {
      toast.error(err.response.data.msg);
    } else {
      toast.error("Something went wrong!");
    }
  }
};

const fetchSpecialMenu = async () => {
  try {
    const categoryRes = await axios.get("http://localhost:8000/api/dishes");
    const productRes = await axios.get("http://localhost:8000/api/products");

    if (categoryRes.data.length > 1) {
      const secondCat = categoryRes.data[1];
      setSpecialMenuCategory(secondCat);

      const relatedProducts = productRes.data
        .filter((p) => p.category === secondCat._id || p.category?._id === secondCat._id)
        .slice(0, 3);

      setSpecialMenuProducts(relatedProducts);
    }
  } catch (err) {
    console.error("Error fetching special menu:", err);
    toast.error("Cannot fetch special menu");
  }
};

const fetchMetaData = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/meta");
    const data = await res.json();

    if (data?.title && data?.description) {
      setMetaData({ title: data.title, description: data.description });
    } else {
      const defaultMeta = { title: "My Title", description: "My Description" };
      const postRes = await fetch("http://localhost:8000/api/meta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(defaultMeta),
      });
      const savedData = await postRes.json();
      setMetaData(savedData.meta || defaultMeta);
    }
  } catch (err) {
    console.error("Failed to fetch meta:", err);
    toast.error("Failed to fetch meta info");
  }
};
const updateMetaData = async (updatedMeta) => {
  setLoading(true);
  try {
    const res = await fetch("http://localhost:8000/api/meta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMeta),
    });
    const result = await res.json();
    setMetaData(result?.meta || updatedMeta);
    toast.success(result.message || "Meta data updated successfully!");
  } catch (error) {
    console.error("Submit error:", error);
    toast.error("Failed to update meta data.");
  } finally {
    setLoading(false);
  }
};

  const fetchFooterData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/footer");
      setFooterData(res.data);
    } catch (err) {
      console.error("Failed to fetch footer:", err);
    }
  };
const updateFooterData = async (formData) => {
  setLoading(true);
  try {
    const res = await axios.put("http://localhost:8000/api/footer", formData);
    setFooterData(res.data);
    toast.success("Footer updated successfully!");
  } catch (err) {
    console.error("Failed to update footer:", err);
    toast.error("Failed to update footer.");
  } finally {
    setLoading(false);
  }
};
  const fetchContactData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/contact");
      setContactData(res.data);
    } catch (err) {
      console.error("Failed to fetch contact info:", err);
    }
  };
 const updateContactData = async (formData) => {
    setLoading(true);
    try {
      await axios.put("http://localhost:8000/api/contact/update", formData);
      setContactData(formData);
      toast.success("Contact info updated!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update contact info.");
    } finally {
      setLoading(false);
    }
  };
  const fetchCarouselImages = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/home");
      if (res.data?.carouselImages) {
        setCarouselImages(res.data.carouselImages);
      }
    } catch (err) {
      toast.error("Failed to load carousel");
    }
  };

  const deleteCarouselImage = async (url) => {
    try {
      const res = await axios.put("http://localhost:8000/api/home/delete-image", {
        imageUrl: url,
      });
      setCarouselImages(res.data.data);
      toast.success("Image deleted");
    } catch {
      toast.error("Delete failed");
    }
  };

  const uploadCarouselImages = async (files) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("images", file);
    });

    try {
      await axios.post("http://localhost:8000/api/home", formData, {
        timeout: 60000,
      });
      toast.success("Carousel updated!");
      fetchCarouselImages();
    } catch {
      toast.error("Update failed!");
    }
  };
const addCategory = async (formData) => {
  setLoading(true);
  try {
    await axios.post("http://localhost:8000/api/dishes", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("Category added successfully!");
  } catch (err) {
    console.error("Failed to add category:", err);
    toast.error(err.response?.data?.error || "Failed to add category");
  } finally {
    setLoading(false);
  }
};
const [dishes, setDishes] = useState([]);
const [editDish, setEditDish] = useState(null);

const fetchDishes = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/removedishes");
    setDishes(res.data);
  } catch (error) {
    console.error("Fetch Error:", error);
    toast.error("Failed to fetch categories");
  }
};

const deleteDish = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/api/removedishes/${id}`);
    fetchDishes();
    toast.success("Category deleted");
  } catch (err) {
    console.error("Delete Error:", err);
    toast.error("Failed to delete");
  }
};

const updateDish = async (dishId, formData, callback) => {
  try {
    await axios.put(`http://localhost:8000/api/removedishes/${dishId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    fetchDishes();
    toast.success("Category updated!");
    if (callback) callback();
  } catch (err) {
    console.error("Update Error:", err);
    toast.error("Failed to update");
  }
};
const fetchAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/products");
    setAllProducts(res.data);
  } catch (err) {
    console.error("Error fetching products:", err);
    toast.error("Failed to fetch products");
  }
};

const fetchAllCategories = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/dishes");
    setAllCategories(res.data);
  } catch (err) {
    console.error("Error fetching categories:", err);
    toast.error("Failed to fetch categories");
  }
};
const addProduct = async (form, imageUrls, selectedFiles, resetCallback) => {
  setLoading(true);
  const formData = new FormData();

  formData.append("title", form.title);
  formData.append("desc", form.desc);
  formData.append("price", form.price);
  formData.append("category", form.category);

  imageUrls.forEach((url) => {
    if (url.trim()) {
      formData.append("imageUrls", url);
    }
  });

  selectedFiles.forEach((file) => {
    if (file) {
      formData.append("images", file);
    }
  });

  try {
    await axios.post("http://localhost:8000/api/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success("Product added successfully!");
    if (resetCallback) resetCallback();
  } catch (err) {
    console.error("Add Product Error:", err);
    toast.error(err.response?.data?.error || "Failed to add product");
  } finally {
    setLoading(false);
  }
};
const updateProduct = async (productId, data, onSuccess) => {
  setLoading(true);
  try {
    await axios.put(`http://localhost:8000/api/removeproduct/${productId}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    toast.success("Product successfully updated!");
    fetchAllProducts();
    if (onSuccess) onSuccess();
  } catch (err) {
    toast.error("Update failed");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

const deleteProduct = async (productId, onSuccess) => {
  try {
    await axios.delete(`http://localhost:8000/api/removeproduct/${productId}`);
    toast.success("Product deleted");
    fetchAllProducts();
    if (onSuccess) onSuccess();
  } catch {
    toast.error("Failed to delete product");
  }
};

  useEffect(() => {
    fetchFooterData();
    fetchContactData();
    fetchCarouselImages();
  }, []);

  return (
    <AppDataContext.Provider
      value={{
        addProduct,
        footerData,
        updateProduct,
deleteProduct,
        setFooterData,
        fetchFooterData,
          updateFooterData,
        contactData,
            updateContactData,
        setContactData,
        fetchContactData,
        carouselImages,
        setCarouselImages,
        fetchCarouselImages,
        deleteCarouselImage,
        uploadCarouselImages,
        addCategory,
        dishes,
    setDishes,
    fetchDishes,
    deleteDish,
    updateDish,
    editDish,
    setEditDish,
     loginAdmin,
    specialMenuCategory,
specialMenuProducts,
fetchSpecialMenu,
    allProducts,
    setAllProducts,
    fetchAllProducts,
    allCategories,
    setAllCategories,
    fetchAllCategories,
     metaData,
    setMetaData,
     submitOrder,
    fetchMetaData,
    updateMetaData,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default AppDataContext;
