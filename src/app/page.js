import '@@/styles/globals.css';
import Image from 'next/image';
import Script from 'next/script';
export default function Page() {
  return (
    <>
    {/* bringing in the linkedIn Badge */}
    <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="beforeInteractive"/>
    <div style={{backgroundColor:"white", padding:"20px 0px 20px 0px"}}class=" justify-content-center d-flex flex-row">
    <div class=" align-items-center justify-content-center d-flex flex-column">
    
    <div class="LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="blake-stauffer-174163156" data-version="v1">
      <a style={{color:"black" }} class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/blake-stauffer-174163156?trk=profile-badge">Blake S.</a>
      </div>
      <div>
          <a rel="noopener noreferrer" href="https://github.com/bestauffer"><Image unsized alt="Github Banner" src='https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white'/></a>
        </div>        
              
    </div>
    </div>
    
    </>
  );
}