
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-[100%] bg-[#FFFFFF]">
      <div className="flex p-[80px] gap-[40px] w-[90%] xl:w-[70%]  mx-auto bg-[#F0F2F3] rounded-bl-[48px]  rounded-br-[48px]">
        <div>
          <p className="font-[sans] uppercase">wellcome to Chairy</p>
          <h1 className="font-[sans-serif ] text-[#272343] font-bold text-[60px]  pt-[20px] pb-[20px]">Best Furniture
            Collection for your
            interior.</h1>
            <button className="flex gap-2 bg-[#029FAE] text-center hover:shadow-[0px_0px_5px_#029FAE] text-[#FFFFFF] rounded-[8px] h-[52px] w-[171px] px-[24px] py-[14px]">Shop Now
              <Image
              src="/Rightarrow.png"
              alt="rightarrow"
              width={16}
              height={9}
              className="w-[28px] h-[24px] hover:w-[30px] hover:h-[28px] "
              priority
              unoptimized />
            </button>
        </div>
        <div>
          <Image 
          src="/ProductImage.webp"
          alt="front picture of chair"
          width={438}
          height={584}
          priority
          className="w-[534px] h-[484px] " 
          />
        </div>
      </div>
      <div className="flex justify-between mt-[20px] px-[10px] h-[139px] w-[90%] xl:w-[70%] mx-auto">
  <Image src="/zapeirlogo.webp"
    alt="companiesLogo"
    width={85}
    height={87}
    priority
    className="w-85 h-87"
  />
  
  <Image src="/pepedrive.webp"  
    alt="companiesLogo"
    width={107}
    height={109}
    priority
    className="w-107 h-109"
  />

  <Image src="/cibbanklogo.webp"  
    alt="companiesLogo"
    width={135}
    height={189}
    priority
    className="w-135 h-189"
  />

  <Image src="/logo4.webp" 
    alt="companiesLogo"
    width={63}
    height={63}
    priority
    className="w-63 h-63"
  />

  <Image src="/burntoast.webp" 
    alt="companiesLogo"
    width={98}
    height={101}
    priority
    className="w-98 h-101"
  />

  <Image src="/panda.webp" 
    alt="companiesLogo"
    width={113}
    height={115}
    priority
    className="w-113 h-115"
  />

  <Image src="/maz.webp" 
    alt="companiesLogo"
    width={84}
    height={87}
    priority
    className="w-84 h-87"
  />
</div>
      </div>
)
}