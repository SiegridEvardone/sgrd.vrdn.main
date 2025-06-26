export const Footer = () => {
  return(
    <footer className="h-fit py-5 px-6 sm:px-12 lg:px-18 text-center border-t box-border bg-body">
      <div className="flex pt-10">
        <div className="flex-auto text-start">
          <span className="font-bold text-2xl text-style">SGRD.VRDN</span>
        </div>
         <div className="flex flex-auto flex-col text-start">
          <span className="font-bold text-lg">LINKS</span>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="flex flex-auto flex-col gap-1 text-start">
          <span className="font-bold text-lg">SOCIALS</span>
          <div className="w-8">
            <a href="https://github.com/SiegridEvardone"><img src="/public/images/github.png" alt="" className="w-full h-full dark:bg-white rounded" /></a>
          </div>
          <div className="w-8">
            <a href="https://www.linkedin.com/in/siegrid-mae-evardone-16473428b/"><img src="/public/images/linkedin.png" alt="" className="w-full h-full " /></a>
          </div>
          <div className="w-8">
            <a href="https://www.instagram.com/sgrd_vrdn/"><img src="/public/images/instagram.png" alt="" className="w-full h-full" /></a>
          </div>
        </div>
       
      </div>
      <p className="mt-15">© 2025 Siegrid Mae Evardone | All Rights Reserved</p>
    </footer>
  )
}