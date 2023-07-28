import "./Home.css";
import "../../App.css";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

const enterpriseFeatures = [
  {
    title: "Backup/Restore",
  },

  {
    title: "DB Monitering Dashboard",
  },
  {
    title: "Schedule Management",
  },
  {
    title: "Database Audit",
  },
  {
    title: "SQL Monitoring",
  },
  {
    title: "Performance Management",
  },
];

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <>
      {/* header */}
      <Header />

      {/* hero section */}
      <div className="heroSection">
        <div className="heroSectionContainer">
          <img src="/img/AgenSQL-Logo.png" alt="AgenSQL Logo" />
          <h3>An integration of Bitnine's DB technology and PG expertise</h3>
          <p>
            AgensSQL is an all-new relational DBMS based on PostgreSQL, with
            years of expertise and knowledge accumulated through database
            research and development.
          </p>
          <p>
            The enterprise package, along with AgensSQL engine, is an all-in-one
            solution that ensures the efficiency and scalability of data
            management.
          </p>
          <p>
            Get AgensSQL now for stable operation and management services at a
            reduced maintenance cost.
          </p>
          <div className="heroSectionBtns">
            <Button desc="Contact" />
            <Button desc="Brochure" />
            <Button desc="Blog" />
          </div>
        </div>
      </div>

      {/* package section */}
      <div className="packageSection">
        <div className="packageSectionContainer">
          <img src="/img/img_diagram_eng.png" alt="" />
        </div>
      </div>

      {/* feature section */}
      <div className="featureSection">
        <div className="featureSectionContainer">
          <h1>Key features</h1>
          <p>Manage your data with Agens Enterprise Package</p>
          <p>
            Essential enterprise features such as high availability and sharding
            are provided
          </p>
          <img src="/img/img_key-features_eng.png" alt="" />
        </div>
      </div>

      {/* db engine section */}
      <div className="dbEngineSection">
        <div className="dbEngineSectionContainer">
          <h1>AgensSQL DB Engine</h1>
          <h3>Enhanced Data Security</h3>
          <p>
            AgensSQL is a PostgreSQL-based DBMS <br />
            that guarantees optimal security and stability.
          </p>
          <div className="dbEngineSectionFeatures">
            <div className="dbEngineSectionFeature">
              <img src="/img/Password-Profile.png" alt="" />
            </div>
            <div className="dbEngineSectionFeature">
              <img src="/img/Data-Redaction.png" alt="" />
            </div>
            <div className="dbEngineSectionFeature">
              <img src="/img/Auditing.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* enterprise section */}
      <div className="enterpriseSection">
        <div className="enterpriseSectionContainer">
          <h1>Agens Enterprise Package</h1>
          <p>
            Agens Enterprise Package comes with a high availability management
            server that <br />
            supports backup and data monitoring dashboard that helps enterprise
            customers manage their data efficiently.
          </p>
          <div className="enterpriseBody">
            <div className="enterpriseImg">
              <h2>Agens HA Manager</h2>
              <img src="/img/img_AHM_eng.png" alt="" />
            </div>
            <div className="enterpriseContent">
              <h2>Agens Enterprise Manager</h2>
              <div className="enterpriseContentList">
                {enterpriseFeatures?.map((item) => {
                  return (
                    <div key={item?.title} className="enterpriseContentItem">
                      <p>{item?.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
