import React from 'react';
import Link from 'next/link';
export default function Footer({resumeData}){
    return (
        <footer id="contact">
                <div className="columns contact-details">
                  <h2>Contact</h2>
                  <p className="address">
                  <Link href="http://www.marzooq.tech"><span>{resumeData.website}</span></Link>
                  </p>
          </div>
        </footer>
    );
}
