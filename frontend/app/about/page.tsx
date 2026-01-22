"use client";

export default function About() {
  return (
    <main style={{
      color: "#e0e0e0",
      minHeight: "calc(100vh - 100px)",
      paddingTop: "2rem"
    }}>
      <h1 style={{ 
        marginTop: 0, 
        marginBottom: "0.5rem",
        fontSize: "2.5rem",
        fontWeight: 700,
        background: "linear-gradient(135deg, #00d4ff 0%, #8a2be2 50%, #ff00ff 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
        letterSpacing: "-0.02em"
      }}>
        About
      </h1>
      <p style={{
        color: "#b0b0b0",
        fontSize: "1.1rem",
        marginBottom: "2rem",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)"
      }}>
        A.S.T.R.A. (Autonomous Sky Tracking and Recon Apparatus)
      </p>

      <div style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        padding: "2rem",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        maxWidth: 800,
        margin: "0 auto"
      }}>
        <h2 style={{
          marginTop: 0,
          color: "#00d4ff",
          fontSize: "1.5rem",
          marginBottom: "1rem"
        }}>
          What is A.S.T.R.A.?
        </h2>
        <p style={{
          color: "#d0d0d0",
          lineHeight: "1.6",
          marginBottom: 0
        }}>
          A.S.T.R.A. is an autonomous telescope system that can track celestial objects and capture high quality images of these objects.
          It is designed to be used in a remote location and is self-contained, with its own power source and communication system.
          A.S.T.R.A is a project for the University of Arizona Senior Design Course. It is a collaboration between the University of Arizona and RTX. 
          The goal of this project is to create a system that can work with different telescope types and configurations which allow for a wide range of applications.
          This system is designed to be used as an educational tool for students to learn about telescope optics and astronomy.
        </p>
      </div>

      <div style={{
        maxWidth: 1200,
        margin: "3rem auto 0",
      }}>
        <h2 style={{
          color: "#00d4ff",
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1rem",
          textAlign: "center",
          textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
        }}>
          Team Members
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "2rem"
        }}>
          {/* Team Member 1 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-1.jpg" 
                alt="Team Member 1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Jack Lee - Team Lead
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Optical Engineering <br />
              Jack is ...
            </p>
          </div>

          {/* Team Member 2 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-2.jpg" 
                alt="Team Member 2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Jacob Missbrenner - Procurement Lead
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Electrical Engineering <br />
              Jacob is ...
            </p>
          </div>

          {/* Team Member 3 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-3.jpg" 
                alt="Team Member 3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Owen Litz
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Optical Engineering <br />
              Owen is ...
            </p>
          </div>

          {/* Team Member 4 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-4.jpg" 
                alt="Team Member 4"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Sarah Aramburo
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Mechanical Engineering <br />
              Sarah is ...
            </p>
          </div>

          {/* Team Member 5 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-5.jpg" 
                alt="Team Member 5"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
              Alexis Cervantes
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Electrical Engineering <br />
              Alexis is ...
            </p>
          </div>

          {/* Team Member 6 */}
          <div style={{
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            padding: "1.5rem",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            textAlign: "center"
          }}>
            <div style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              backgroundColor: "rgba(0, 212, 255, 0.1)",
              border: "2px solid rgba(0, 212, 255, 0.3)",
              margin: "0 auto 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative"
            }}>
              <img 
                src="/team-member-6.jpg" 
                alt="Team Member 6"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#00d4ff",
                fontSize: "4rem",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1
              }}>
                👤
              </div>
            </div>
            <h3 style={{
              color: "#00d4ff",
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              textShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
            }}>
            Steven Paredeza
            </h3>
            <p style={{
              color: "#d0d0d0",
              fontSize: "0.95rem",
              lineHeight: "1.6",
              margin: 0
            }}>
              Major: Mechanical Engineering <br />
              Steven is ...
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}
