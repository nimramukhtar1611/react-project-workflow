import React from 'react'

const Moment = () => {
  const boxShadow = "0 1px 6px 0 rgba(60,72,88,.04)";
  const borderRadius = 16;
  return (
    <div>
      <div className="container" style={{ maxWidth: 1200 }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
          fontSize: "2rem",
          color: "#222",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}>
          Moments to Remember
        </div>
        <div className="row g-4 mb-4 ">
          {[
            {
              title: "Elegant Main Dining Area",
              img: "https://imgs.search.brave.com/KFN3FSm78Yo5gWmTqPgfVfeYUN-6uO-oVo13LsaTViE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnRl/cmlvcmRlc2lnbi5u/ZXQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDQvSW50ZXJp/b3ItRGVzaWduLUF1/dG9iYW4tSm9hbGkt/QmVpbmctaWR4MjMw/MzAxX2hvc3BfamIx/MC0xMDI0eDY5MC5q/cGc"
            },
            {
              title: "Modern Living Space",
              img: "https://imgs.search.brave.com/BQPXV0FPEr3bV44YcZutU2Lu7EuL9qBhdOLJlCSBohg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXlk/b29yLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMS9T/U1BBNl8wMDAyX1Jh/eWRvb3JfTWFycmlv/dHREZW52ZXIuanBn"
            },
            {
              title: "Minimalist Dining Experience",
              img: "https://imgs.search.brave.com/82mkTYC-aXHmXJe71gOol7Ghmrs1tZP0l0fWsPFLOpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/MTc5NjMyL3Bob3Rv/L2JhbnF1ZXQtYW5k/LWRpbm5lci1wYXJ0/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ekw0UjhOYjF4/b0xPSnNTZXNwNWJH/eW13Wmd6MTlpUlhR/ZjVDeXJVeFJGUT0"
            },
            {
              title: "Signature Strawberry Cocktails",
              img: "https://imgs.search.brave.com/H2aD8zveDmM00H_XAxHP3bkTZZZc8Tiq53LwU8_-T_I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1hcGkueG9ncnAu/Y29tL2ltYWdlcy83/ZjlmYmJkMC00Yzgx/LTRjMzQtYWYwNi05/ZTM1ODEwNjFjNmV-/cnNfNzY4LmgtY3Jf/MC4wLjE3NTcuMjM0/Mg"
            },
            {
              title: "Intimate Bar Setting",
              img: "https://imgs.search.brave.com/4Q1kaT3O-2hIFbs4TkdWoEWAjMnB883qw_0uuTps2ec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vdGhlLWluZmF0/dWF0aW9uL2ltYWdl/L3VwbG9hZC9jX2Zp/bGwsd18zODQwLGFy/XzQ6MyxnX2NlbnRl/cixmX2F1dG8vaW1h/Z2VzL0xlX01hZ3Jp/dHRlX0Jhcl8tX0Jh/cm1hbl8tX1ByaW50/X0hlbGVuX0NhdGhj/YXJ0X2NpdG14bA"
            },
            {
              title: "Garden Bistro Experience",
              img: "https://imgs.search.brave.com/HSc7VEjXZhUMm_L391czMiZHimjHSBnGgCcgR0cLqSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXNp/emVyLm90c3RhdGlj/LmNvbS92My9waG90/b3MvNTI5MTQyNjIt/Mj93aWR0aD0xMjgw/JmhlaWdodD03MjAm/d2VicD10cnVl"
            }
          ].map((item, i) => (
            <div className="col-12 col-sm-6 col-lg-4 " key={i}>
              <div
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 220, // Bada kiya
                  borderRadius,
                  boxShadow,
                  marginBottom: 8,
                  width: "100%"
                }}
              ></div>
              <div style={{
                background: "#fff",
                borderRadius: 12,
                padding: "12px 14px",
                fontWeight: 600,
                fontFamily: "Playfair Display',serif",
                fontSize: "1.07rem",
                color: "#222",
                textAlign: "center",
                boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                marginTop: "-1px",
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                zIndex: 2
              }}>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Moment