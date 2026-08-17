import { Link } from "react-router-dom";
import { bakersData } from "../../bakers/data/bakersData";

export default function BakerTeam() {
  return (
      <section className="py-20 bg-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-lg mb-2">The kitchen</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            <span className="text-gray-800">Meet our </span>
            <span className="text-primary">bakers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Head baker, pastry, florals, cupcakes and kids’ cakes — the people behind From My Oven.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bakersData.map((baker) => (
            <Link key={baker.id} to="/bakers" className="group">
              <div className="rounded-t-2xl overflow-hidden h-56">
                <img
                  src={baker.photo}
                  alt={baker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="bg-primary text-white p-4 rounded-b-2xl text-center">
                <h3 className="font-semibold">{baker.name}</h3>
                <p className="text-sm text-white/85">{baker.experienceYears} years baking</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
