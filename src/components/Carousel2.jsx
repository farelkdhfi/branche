import { useNavigate } from "react-router-dom";

const items = [
  { name: "TokoPedia", link: "/id" },
  { name: "WhatsApp Order", link: "/tw" },
  { name: "Partnership", link: "/th" },
  { name: "TikTok", link: "/my" },
];

const Carousel2 = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-20 w-full overflow-hidden">
      <div className="carousel">
        <div className="carousel-track">
          {[...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ].map((item, index) => (
            <div
              key={index}
              className="carousel-item cursor-pointer"
              onClick={() => navigate(item.link)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .carousel {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .carousel-track {
          display: flex;
          gap: 16px;
          animation: scroll 10s linear infinite;
        }

        .carousel:hover .carousel-track {
          animation-play-state: paused;
        }

        .carousel-item {
          padding: 8px 16px;
          background: transparent;
       
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
          transition: 0.3s;
        }

        .carousel-item:hover {
          color: white;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel2;
