import ServicesCard from "./ServicesCard";
import Title from "./Title";


const Services = () => {
    const cards = 8;
    return (
        <div>
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