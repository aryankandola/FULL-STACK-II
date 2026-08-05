import { useSelector } from "react-redux";
import PlatformCard from "../../components/PlatformCard";

function Platforms() {
  const platforms = useSelector(
    (state) => state.platforms.platforms
  );

  return (
    <div>
      <h2>Available Platforms</h2>

      <div className="platform-container">
        {platforms.map((platform, index) => (
          <PlatformCard
            key={index}
            platform={platform}
          />
        ))}
      </div>
    </div>
  );
}

export default Platforms;