"use client";

import Footer from "@/app/components/Footer";
import NavbarForPage from "@/app/components/NavbarForPage";

import SixthContainer from "@/app/components/addPropertyCompos/SixthContainer";
import FifthContainer from "@/app/components/addPropertyCompos/FifthContainer";
import FirstContainer from "@/app/components/addPropertyCompos/FirstContainer";
import SecondContainer from "@/app/components/addPropertyCompos/SecondContainer";
import ThirdContainer from "@/app/components/addPropertyCompos/ThirdContainer";
import FourthContainer from "@/app/components/addPropertyCompos/FourthContainer";
import RentContainer from "@/app/components/addPropertyCompos/RentContainer";
import Sidebar from "@/app/components/addPropertyCompos/Sidebar";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";
import { auth } from "@/app/lib/firebase";

export interface ImageFile {
  id: string;
  url: string;
  file: File;
}

const RoomDescription = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // First Container
  const [propertyType, setPropertyType] = useState<string | null>(null);
  const [unit, setUnit] = useState<number>(1);

  // Second Container
  const [title, setTitle] = useState<string>("");
  const [descri, setDescri] = useState<string>("");

  // Third Container
  const [location, setLocation] = useState<string>("");

  // Fourth Container
  const [rent, setRent] = useState<number | "">("");
  const [phone, setPhone] = useState<string>("");

  // Fifth Container
  const [facilities, setFacilities] = useState<string[]>([]);

  // Sixth Container
  const [images, setImages] = useState<ImageFile[]>([]);
  const [youtubeVideo, setYoutubeVideo] = useState<string>("");

  const handleSubmit = async () => {
    try {
      // 1. Make sure Firebase authentication has finished loading
      if (loading) {
        return;
      }

      // 2. Make sure user is logged in
      const currentUser = auth.currentUser;

      if (!currentUser) {
        console.log("No user is logged in");
        router.push("/login");
        return;
      }

      // 3. Get Firebase ID token
      const token = await currentUser.getIdToken();

      // 4. Create FormData
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", descri);
      formData.append("propertyType", propertyType ?? "");
      formData.append("unit", unit.toString());
      formData.append("price", rent.toString());
      formData.append("location", location);
      formData.append("amenities", JSON.stringify(facilities));
      formData.append("youtubeVideo", youtubeVideo);

      // 5. Add image files
      images.forEach((image) => {
        formData.append("images", image.file);
      });

      // 6. Send everything to our API
      const response = await fetch("/api/properties", {
        method: "POST",

        headers: {
          Authorization: `Bearer ${token}`,
        },

        body: formData,
      });

      // 7. Read backend response
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create property");
      }

      console.log("Property created successfully:", data);

      // Optional: redirect after successful publish
      // router.push("/properties");

    } catch (error) {
      console.error("Failed to create property:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavbarForPage />

      <main className="max-w-345 mx-auto px-4 sm:px-8 md:px-12 py-8 flex flex-col gap-8">

        <FirstContainer />

        <div className="w-full flex flex-col gap-10 lg:flex-row">

          {/* Sidebar */}
          <Sidebar handleSubmit={handleSubmit} />

          {/* Form Content */}
          <div className="flex flex-col gap-6">

            <SecondContainer
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              unit={unit}
              setUnit={setUnit}
            />

            <ThirdContainer
              title={title}
              setTitle={setTitle}
              descri={descri}
              setDescri={setDescri}
            />

            <FourthContainer
              location={location}
              setLocation={setLocation}
            />

            <RentContainer
              rent={rent}
              setRent={setRent}
              phone={phone}
              setPhone={setPhone}
            />

            <FifthContainer
              facilities={facilities}
              setFacilities={setFacilities}
            />

            <SixthContainer
              images={images}
              setImages={setImages}
              youtubeVideo={youtubeVideo}
              setYoutubeVideo={setYoutubeVideo}
            />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RoomDescription;