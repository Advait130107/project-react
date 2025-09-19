import React, { useState } from "react";
import { FaDumbbell } from "react-icons/fa";

const Equipment = () => {
  const [equipment] = useState([
    {
      id: 1,
      name: "Treadmill",
      img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Bench Press",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Dumbbells Set",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0643?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Rowing Machine",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Elliptical Trainer",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Stationary Bike",
      img: "https://images.unsplash.com/photo-1594381898648-28fefc14f4cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      name: "Lat Pulldown Machine",
      img: "https://images.unsplash.com/photo-1635070041078-e363dbe00587?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Leg Press Machine",
      img: "https://images.unsplash.com/photo-1634914091063-016e918a1962?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      name: "Smith Machine",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      name: "Chest Fly Machine",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Pull-Up Bar",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Kettlebells",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0643?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      name: "Resistance Bands",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Medicine Ball",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0643?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      name: "Battle Ropes",
      img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 16,
      name: "Punching Bag",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 17,
      name: "Stepper Machine",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 18,
      name: "Ab Roller",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0643?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 19,
      name: "Foam Roller",
      img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0643?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 20,
      name: "Cross Trainer",
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-warning">
        <FaDumbbell className="me-2" />
        Sports To Enroll
      </h2>

      <div className="row">
        {equipment.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
