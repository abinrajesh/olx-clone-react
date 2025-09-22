import React, { useState } from 'react'
import styles from './Post.module.css';
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../Firebase/Config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useAuth } from '../../Context/AuthContext'

const Post = () => {

    const navigate = useNavigate();
    const { user } = useAuth();
    const [adTitle, setAdTitle] = useState("");
    const [adDescription, setAdDescription] = useState("");
    const [adPrice, setAdPrice] = useState("");
    const [adCategory, setAdCategory] = useState("");
    const [images, setImages] = useState([]);

    const handleReturn = () => {
        navigate('/');
    }

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const handlePostAd = async (e) => {
        e.preventDefault();

        if (!user?.uid) return alert("You must be logged in!");


        try {
            const imageUrls = [];

            for (const image of images) {
                const imageRef = ref(storage, `ads/${user.uid}/${Date.now()}-${image.name}`);
                await uploadBytes(imageRef, image);
                const url = await getDownloadURL(imageRef);
                imageUrls.push(url);
            }


            await addDoc(collection(db, "ads"), {
                userId: user.uid,
                title: adTitle,
                description: adDescription,
                price: adPrice,
                category: adCategory,
                images: imageUrls,
                createdAt: serverTimestamp()
            });

            alert("Ad posted Successfully");
            setAdTitle("");
            setAdDescription("");
            setAdPrice("");
            setAdCategory("");
            setImages([]);
            navigate('myads')

        }
        catch (error) {
            console.error("Error posting ad: ", error);
            alert("Failed to post ad.");

        };
    };

    return (
        <div className={styles.postContainer}>

            <div className={styles.postHeader}>

                <div className={styles.returnBtn}>
                    <button onClick={handleReturn}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>

            <div className={styles.postSection}>

                <div className={styles.header}>
                    <span>POST YOUR AD</span>
                </div>

                <div className={styles.postADSection}>

                    <form className={styles.postAdForm} onSubmit={handlePostAd}>

                        <input type="text" placeholder='Title' value={adTitle} onChange={(e) => setAdTitle(e.target.value)} required />
                        <textarea placeholder='Description' value={adDescription} onChange={(e) => setAdDescription(e.target.value)} required />
                        <input type="number" placeholder='Price' value={adPrice} onChange={(e) => setAdPrice(e.target.value)} required />
                        <input type="text" placeholder='Category' value={adCategory} onChange={(e) => setAdCategory(e.target.value)} required />

                        <div className={styles.adImages}>
                            <input type="file" multiple required onChange={handleImageChange} />
                            {images.length > 0 && (
                                <div className="">
                                    {images.map((img, index) => (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(img)}
                                            alt="preview"
                                            width="200"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className={styles.adBtns}>
                            <button className={styles.discardBtn} type='button' onClick={handleReturn}>
                                <span>Discard</span>
                            </button>

                            <button className={styles.postAdBtn} type='submit'>
                                <span>Post Ad</span>
                            </button>
                        </div>


                    </form>

                </div>

            </div>

        </div>
    )
}

export default Post
