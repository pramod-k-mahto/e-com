import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <div className="space-y-12">
        {/* Company Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg text-gray-700">
            Welcome to our e-commerce store. We are committed to providing the
            best online shopping experience. Our store offers a wide variety of
            products to meet all your needs, from electronics to fashion and
            everything in between. We strive to offer high-quality products at
            competitive prices, along with exceptional customer service.
          </p>
        </section>

        {/* Mission Statement */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to revolutionize the online shopping experience by
            offering unparalleled customer service, a diverse product range, and
            a seamless shopping journey. We aim to build long-lasting
            relationships with our customers by ensuring satisfaction and trust
            in every interaction.
          </p>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="https://image.cnbcfm.com/api/v1/image/107038314-1648568951175-sun.jpg?v=1675711612"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">sundar pichai</h3>
              <p className="text-gray-600">CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            {/* Team Member 3 */}

            <div className="text-center">
              <img
                src="https://t3.ftcdn.net/jpg/01/80/80/28/360_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
