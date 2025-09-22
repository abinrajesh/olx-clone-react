import React, { useEffect, useState } from 'react'
import styles from './Ads.module.css'
import AdCard from '../../Components/AdCard/AdCard'
import LoadMoreAd from '../../Components/Buttons/LoadMore/LoadMoreAd'
import MobileAppBanner from '../Banner/MobileAppBanner'
import { db } from '../../Firebase/Config'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const Ads = () => {

    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const fetchAds = async () => {
            try {
                const q = query(collection(db, "ads"), orderBy("createdAt", "desc"));
                const querySnapshot = await getDocs(q);

                const adsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setAds(adsData);
            } catch (error) {
                console.error("Error fetching ads: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAds();
    }, [])

    if (loading) return <p>Loading ads...</p>;

    return (
        <div className={styles.adsSection}>
            <MobileAppBanner />
            <div className={styles.header}>
                <p>Fresh recommendations</p>
            </div>
            <div className={styles.adsCards}>
                {ads.length > 0 ? (
                    ads.map((ad) => {
                        const date = ad.createdAt?.toDate();
                        const formattedDate = date?.toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        });

                        return (
                            <AdCard
                                key={ad.id}
                                title={ad.title}
                                description={ad.description}
                                price={ad.price}
                                date={formattedDate}
                                images={ad.images}
                            />
                        );
                    })
                ) : (
                    <p>No ads found</p>
                )}
            </div>
            <LoadMoreAd />
            <MobileAppBanner />
        </div>
    )
}

export default Ads
