import ServicesCard from "./ServicesCard";
import Title from "./Title";


const Services = () => {
    
    return (
        <div className="mt-10">
            <Title title1='our provided' title2='services'></Title>
            <div className="container mx-auto grid grid-cols-4 gap-4 px-10 my-10">
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              <ServicesCard></ServicesCard>
              
            </div>
            
        </div>
    );
};

export default Services;