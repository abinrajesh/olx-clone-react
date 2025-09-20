import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {

    const placeholders = ["Bikes", "Jobs", "Cars", "Properties", "Mobiles"];
    const [current, setCurrent] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [input, setInput] = useState("");


    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (input !== "") {
            alert("Searching!");
            setInput("");
        } else {
            alert("Enter something to search!!!");
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % placeholders.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className={styles.searcheSection}>

            <div className={styles.locationSearch}>
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className={styles.locationSearchSvg} fillRule="evenodd"><path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
                <input type="text" className={styles.locationInput} placeholder='India' />
                <span>
                    <button>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
                    </button>
                </span>
            </div>

            <form className={styles.adSearch} onSubmit={handleSearch}>
                <input type="text" className={styles.adSearchInput} placeholder={isFocused ? "Find Cars, Mobile Phones and More..." : ""}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={handleInput}
                    value={input} />
                {!isFocused && (
                    <div className={styles.searchPlaceholder}>

                        <span>Search&nbsp;</span>

                        <span className={styles.slideshow}>
                            <span
                                key={current}
                                className={`${styles.slide} ${styles.animate}`}
                            >
                                "{placeholders[current]}"
                            </span>
                        </span>



                    </div>
                )}


                <button className={styles.adSearchBtn} type='submit'>
                    <span>
                        <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className={styles.adSearchSvg} fillRule="evenodd"><path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
                    </span>
                </button>
            </form>


        </div>
    )
}

export default SearchBar

