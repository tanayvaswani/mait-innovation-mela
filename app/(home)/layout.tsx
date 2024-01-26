import { Navbar } from "@/components/landing/navbar/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-40 pb-20">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
