import { Link } from "react-router-dom";
import { bakersData } from "../../bakers/data/bakersData";

export default function BakerTeam() {
  const baker = bakersData[0];

  return (
    <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-lg mb-2">The kitchen</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            <span className="text-gray-800">Meet our </span>
            <span className="text-primary">baker</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indi Deepanjali designs and bakes every From My Oven cake herself.
          </p>
        </div>

        <Link to="/bakers" className="group max-w-sm mx-auto block">
          <div className="rounded-t-2xl overflow-hidden h-80 bg-[#faf6f0]">
            <img
              src={baker.photo}
              alt={baker.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-primary text-white p-4 rounded-b-2xl text-center">
            <h3 className="font-semibold">{baker.name}</h3>
            <p className="text-sm text-white/85">Head baker</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
