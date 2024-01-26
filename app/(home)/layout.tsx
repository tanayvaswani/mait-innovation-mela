import { Navbar } from "@/components/landing/navbar/navbar";
import { BackgroundCanvas } from "@/components/ui/background-canvas-";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {/* <BackgroundCanvas /> */}
      <main className="pt-40 pb-20 w-full">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
