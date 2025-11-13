import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC= () =>{
    return(
        <div>
            <h1 className=" text-2xl font-extralight">bUTTON COMPONENT DEMO</h1>

              {/* Shape Variants */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button title="Rounded Small" shapes="rounded-sm" size="medium" />
        <Button title="Rounded Medium" shapes="rounded-md" size="medium" />
        <Button title="Rounded Full" shapes="rounded-lg" size="medium" />
        <Button title="Rounded Full" shapes="rounded-full" size="medium" />
      </div>

      {/* Size Variants */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Button title="Small Button" shapes="rounded-md" size="small" />
        <Button title="Medium Button" shapes="rounded-md" size="medium" />
        <Button title="Large Button" shapes="rounded-md" size="large" />
        <Button title="Extra Large Button" shapes="rounded-full" size="extralarge" />
        
      </div>

      {/* Custom Style Example */}
      <div className="flex gap-4 mt-8">
        <Button
          title="Success"
          size="medium"
          shapes="rounded-lg"
          className="bg-green-600 hover:bg-green-700"
        />
        <Button
          title="Danger"
          size="medium"
          shapes="rounded-lg"
          className="bg-red-600 hover:bg-red-700"
        />
      </div>
    </div>
  );
}

export default Landing