import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC= () =>{
    return(
        <div>
            <h1 className=" text-2xl font-extralight">bUTTON COMPONENT DEMO</h1>

              {/* Shape Variants */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button title="Rounded Small" shape="rounded-sm" size="medium" />
        <Button title="Rounded Medium" shape="rounded-md" size="medium" />
        <Button title="Rounded Full" shape="rounded-full" size="medium" />
      </div>

      {/* Size Variants */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button title="Small Button" shape="rounded-md" size="small" className="bg-amber-700" />
        <Button title="Medium Button" shape="rounded-md" size="medium" />
        <Button title="Large Button" shape="rounded-md" size="large" />
      </div>

      {/* Custom Style Example */}
      <div className="flex gap-4 mt-8">
        <Button
          title="Success"
          size="medium"
          shape="rounded-full"
          className="bg-green-600 hover:bg-green-700"
        />
        <Button
          title="Danger"
          size="medium"
          shape="rounded-full"
          className="bg-red-600 hover:bg-red-700"
        />
      </div>
    </div>
  );
}

export default Landing