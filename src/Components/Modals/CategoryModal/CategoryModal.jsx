import React from 'react'
import styles from './CategoryModal.module.css'
import { Link } from 'react-router-dom'

const CategoryModal = () => {
  return (
    <div className={styles.CategoryModalContainer}>
      <div className={styles.categoryLinks}>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Cars</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Bikes</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Motorcycles</span>
            </Link>
            <Link>
              <span>Scooters</span>
            </Link>
            <Link>
              <span>Spare Parts</span>
            </Link>
            <Link>
              <span>Bicycles</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Properties</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>For Sale: Houses & Apratments</span>
            </Link>
            <Link>
              <span>For Rent: Houses & Apratments</span>
            </Link>
            <Link>
              <span>Lands & Plots</span>
            </Link>
            <Link>
              <span>For Rent: Shops & Offices</span>
            </Link>
            <Link>
              <span>For Sale: Shops & Offices</span>
            </Link>
            <Link>
              <span>PG & Guest Houses</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Electronics & Appliances</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>TVs, Video - Audio</span>
            </Link>
            <Link>
              <span>Kitchen & Other Appliances</span>
            </Link>
            <Link>
              <span>Computers & Laptops</span>
            </Link>
            <Link>
              <span>Games & Entertainment</span>
            </Link>
            <Link>
              <span>Fridges</span>
            </Link>
            <Link>
              <span>Computer Accessories</span>
            </Link>
            <Link>
              <span>Hard Disks, Printers & Monitors</span>
            </Link>
            <Link>
              <span>ACs</span>
            </Link>
            <Link>
              <span>Washing Machines</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Mobiles</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Mobile Phones</span>
            </Link>
            <Link>
              <span>Accessories</span>
            </Link>
            <Link>
              <span>Tablets</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Commercial Vehicles & Spares</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Commercial & Other Vehicles</span>
            </Link>
            <Link>
              <span>Spare Parts</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Jobs</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Data entry & Back office</span>
            </Link>
            <Link>
              <span>Sales & Marketing</span>
            </Link>
            <Link>
              <span>BPO & Telecaller</span>
            </Link>
            <Link>
              <span>Driver</span>
            </Link>
            <Link>
              <span>Office Assistant</span>
            </Link>
            <Link>
              <span>Delivery & Collection</span>
            </Link>
            <Link>
              <span>Teacher</span>
            </Link>
            <Link>
              <span>Cook</span>
            </Link>
            <Link>
              <span>Receptionist & Front office</span>
            </Link>
            <Link>
              <span>Operator & Technician</span>
            </Link>
            <Link>
              <span>IT Engineer &  Developer</span>
            </Link>
            <Link>
              <span>Hotel & Travel Executive</span>
            </Link>
            <Link>
              <span>Accountant</span>
            </Link>
            <Link>
              <span>Designer</span>
            </Link>
            <Link>
              <span>Other Jobs</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Furniture</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Sofa & Dining</span>
            </Link>
            <Link>
              <span>Beds & Wardrobes</span>
            </Link>
            <Link>
              <span>Home Decor & Garden</span>
            </Link>
            <Link>
              <span>Kids Furniture</span>
            </Link>
            <Link>
              <span>Other Household Items</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Fashion</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Men</span>
            </Link>
            <Link>
              <span>Women</span>
            </Link>
            <Link>
              <span>Kids</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Pets</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Fishes & Aquarium</span>
            </Link>
            <Link>
              <span>Pet Foods & Accessories</span>
            </Link>
            <Link>
              <span>Dogs</span>
            </Link>
            <Link>
              <span>Other Pets</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Books, Sports & Hobbies</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Books</span>
            </Link>
            <Link>
              <span>Gym & Fitness</span>
            </Link>
            <Link>
              <span>Musical Instruments</span>
            </Link>
            <Link>
              <span>Sports Equipment</span>
            </Link>
            <Link>
              <span>Other Hobbies</span>
            </Link>
          </div>
        </div>

        <div className={styles.LinksSections}>
          <div className={styles.LinkMain}>
            <Link>
              <span>Services</span>
            </Link>
          </div>
          <div className={styles.subLinks}>
            <Link>
              <span>Education & Classes</span>
            </Link>
            <Link>
              <span>Tours & Travel</span>
            </Link>
            <Link>
              <span>Electronics Repair & Services</span>
            </Link>
            <Link>
              <span>Health & Beauty</span>
            </Link>
            <Link>
              <span>Home Renovation & Repair</span>
            </Link>
            <Link>
              <span>Cleaning & Pest Control</span>
            </Link>
            <Link>
              <span>Legal & Documentation Services</span>
            </Link>
            <Link>
              <span>Packers & Movers</span>
            </Link>
            <Link>
              <span>Other Services</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryModal
