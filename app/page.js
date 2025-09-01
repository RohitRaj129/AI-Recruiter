import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6ecf4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0c131c]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0c131c] text-lg font-bold leading-tight tracking-[-0.015em]">
              AI Recruiter
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-[#0c131c] text-sm font-medium leading-normal"
                href="#"
              >
                Product
              </a>
              <a
                className="text-[#0c131c] text-sm font-medium leading-normal"
                href="#"
              >
                Solutions
              </a>
              <a
                className="text-[#0c131c] text-sm font-medium leading-normal"
                href="#"
              >
                Resources
              </a>
              <a
                className="text-[#0c131c] text-sm font-medium leading-normal"
                href="#"
              >
                Pricing
              </a>
            </div>
            <div className="flex gap-2">
              <Link href="/dashboard">
                <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#025ce3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Get Started</span>
                </Button>
              </Link>
              <Link href="/auth">
                <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e6ecf4] text-[#0c131c] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Login</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 md:gap-8 lg:flex-row">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:h-auto md:min-w-[400px] lg:w-full"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRKNU5854jkJkdo9X7wn86HFU2dNMJJuzq-Y2oZKSZNXdOTCc6QSyUBWY0Gj5BJNw_SBs5Y7HvKMVBnQG9pudr7TupXwhV9ernKtrH0-R36WyuVaezG0vku86QFAVuoJtVYU3lQeuioxafOOgHj0El2c1h1JqbEXUC_3TJ8YpBqpYTfRNTij4B_gYudd70dX1HYdLzVHKHC7TfG4vA_K8f46dbw1Z0XF941zj-T_YRSSNNL9_6BqbRLBi-ANaMCpCkiyFgDAq9gtIy")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 lg:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-[#0c131c] text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
                      Hire Smarter with AI
                    </h1>
                    <h2 className="text-[#0c131c] text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
                      AI Recruiter helps you find the right candidates 10x
                      faster.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/dashboard">
                      <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#025ce3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em]">
                        <span className="truncate">Get Started</span>
                      </Button>
                    </Link>
                    <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#e6ecf4] text-[#0c131c] text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em]">
                      <span className="truncate">See Plans</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0c131c] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
                  Key Features
                </h1>
                <p className="text-[#0c131c] text-base font-normal leading-normal max-w-[720px]">
                  Our platform offers a suite of tools to streamline your hiring
                  process.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9e9] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0c131c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0c131c] text-base font-bold leading-tight">
                      Interview Scheduling
                    </h2>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      Schedule interviews seamlessly with integrated calendar
                      tools.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9e9] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0c131c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0c131c] text-base font-bold leading-tight">
                      Analytics
                    </h2>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      Track your hiring performance with detailed analytics and
                      reports.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9e9] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0c131c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0c131c] text-base font-bold leading-tight">
                      AI Matching
                    </h2>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      Match candidates to job requirements using advanced AI
                      algorithms.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#cdd9e9] bg-slate-50 p-4 flex-col">
                  <div className="text-[#0c131c]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0c131c] text-base font-bold leading-tight">
                      Communication
                    </h2>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      Streamlined communication with candidates throughout the
                      hiring process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <h2 className="text-[#0c131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Testimonials
            </h2>
            <div className="flex overflow-x-auto scrollbar-hide">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzTzBSGBY52Uk1IXg7ypsj3KXQQbPBAzXq-hbXW_IIBayCqkWaYT0timNAfbcTKPUjETjjHTPI274jxV75K4XFWMcMsLII2MXIgm_wdo_zLCBZmuCwxkSsH2DihiBQIYdGQeluHCI75lf6HL3n82II5zUJMxN2PIVD7LsgsDXWAonDKgeY1Jxr21ob0rlRSM73uF6mKO71ATWEwUM7yLRbSuYxl9PPFKExcW6WPrmb4S5FfHs7-3h7WKtSnxCWSfm2wjJMhKp30b3x")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0c131c] text-base font-medium leading-normal">
                      Sophia Chen, HR Manager at Tech Innovators
                    </p>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      "AI Recruiter has transformed our hiring process. We've
                      seen a significant improvement in the quality of
                      candidates and a reduction in time-to-hire."
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkL8RWZqW7t0m6CfZiVN_lJxOm6wGias7zFaHVYHSnt7kIHN1z5313--OizAoeqvEot7FyVJ1_7AhIFEzn1-NSOrXv4FsJLVRc8MF5EG3Zbafw20P4iUf-PPJriZ8or-AQC_OGs8t0omVL-dNA0Y5JxxHI9U7jFSWvq_6uMRZaPLdjzhWWAkufJ_tWIprYCGRku8X0SZWarfjpLBuoUAizhn9IW6aG41l5hBBBNRE9zexPDv5dnvE1ANtqttHyC69Q6kLgN75bQnwP")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0c131c] text-base font-medium leading-normal">
                      Ethan Lee, CEO at Growth Ventures
                    </p>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      "The AI-powered matching is incredibly accurate. We're
                      finding candidates that we would have missed otherwise."
                    </p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5wK1QA666XymHdoPgEA0BFDRM_e_89H94WHYwkSXXQnuoRv9WJUdZiNFipinY-B9W4nU3H1il-BG9P1Yru4Pp7lgcIKgkacQvbf0B4iusZ6KgnnIUtjW9ZqZHydcT16h9KlSBydnR1tohg7M-5aRXGwLtHRBkmOGtsxiiKU0XhrZJFdaaohXSvJoElfkjotpedwLQNSjf53NISnugJ7nfJDDu9m-pcoIJ1sj5IsJMk4-nORt3ZwOmbfGEemf_dVxQrT_8cAfDN523")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0c131c] text-base font-medium leading-normal">
                      Olivia Wong, Talent Acquisition Lead at Future Solutions
                    </p>
                    <p className="text-[#466aa0] text-sm font-normal leading-normal">
                      "The analytics dashboard provides valuable insights into
                      our hiring performance, helping us make data-driven
                      decisions."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trusted By Section */}
            <h2 className="text-[#0c131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Trusted By
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaVcSg8bMytRDMhqVnmftBy5lc_4cGLni1emtvHLuMxC6v7agrBkSv9qFDTFMWbjgQZ74VY6L-oPxNACKqiXd7rnDzmxZVg5Dovb-FLoEKldzmXEQeOZxCIjWon-X9pnWjtemcq5931ORBUQlgaZLx3i0H0YUGrSdUKjCcPWqPPT0-wYjCE4xDF6AIMXeX7eOukU3JcvRklWiGO-1vzZpZYTgkRmK9ddYWhwfq_ieJYO4I0yHCArTq_ROk7zvANg2RiGnh2RbTIMTu")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYT9bISD7w8Ijhrz73_gBGzYIF3JcL08bZQDM-RKa5U2nyV5yJ5BzYaIqTJok9m9aMWf2P5qGsJ99ExQnr723PZxM3YBQ1zL98bsKiYeg_85yR4qck6MXaJNEKViVtR_0WxyACfOdQv8uFN0VBK7Cdz1Lr9ja_6nBRPlCl7m2ndQbz76NpP7Q1g0hV_SYsX7sveTtsuoHxBpg74CG2co1otNWcShEQcYwAg0wECUQ9qlBDd40optZwN646nzmqPJveNP4EHTycmB_B")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBe399PwxNo8LAZs7MHgc81wEkMEnmCDgb_Y4mjQt03XbqfndppmY2RP4GhXJ8ftOFW6VFZY-oQFOgPmWoHq6QA77RCJaWQjLYj_BlOI-iir1nZ46rbqgKO5OZYCpNOoAOkLCetA99mixbG__6ru2y1Qhil-QGLtD3sfF3A03BOqgZGSxQ3hyuG6q9aBrcAHDvwXG3X-GYHN3Gv0EZUI_Me2mbrtSeXu8KERJfquHmfyLYi3h-MTV215di4-4LQikJL_vNQF0lLgczg")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD3QaoCdNns2nZYndQrgtaXiQEwqoL0NwOawCbS2ViVEWPWRHXJU6PhxvuSKoRuLCuvD3KfIG-LlEGlbs5BIlQ-jrLCCA-TWsm-iUhN4OtzbQfXD_PoyaR0XLumbnmL166m1dIOXIhLSZnUFa0VlO1zI5BXUTnnbRLECHeDq934Ab0ld5tyTqLt5ChIm7mVn2-jpUGmAdVOhwsz8SnBWRT6eynUXmm5u4LcNN-ffDF4XQX6catwxmFZA8qQYmOsTxY5ZfqicW1ydLj")',
                  }}
                ></div>
              </div>
            </div>

            {/* Sign Up Section */}
            <div className="flex flex-col justify-end gap-6 px-4 py-10 md:gap-8 md:px-10 md:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-[#0c131c] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px] mx-auto">
                  Start hiring better, today.
                </h1>
              </div>
              <div className="flex flex-1 justify-center">
                <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 md:h-16">
                  <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <input
                      placeholder="Enter your email"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0c131c] focus:outline-0 focus:ring-0 border-none bg-[#e6ecf4] focus:border-none h-full placeholder:text-[#466aa0] px-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal"
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#e6ecf4] pr-2">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#025ce3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em]">
                        <span className="truncate">Sign Up</span>
                      </button>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
                <a
                  className="text-[#466aa0] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Product
                </a>
                <a
                  className="text-[#466aa0] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Solutions
                </a>
                <a
                  className="text-[#466aa0] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Resources
                </a>
                <a
                  className="text-[#466aa0] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="text-[#466aa0] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  Contact Us
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#466aa0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#466aa0]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#466aa0] text-base font-normal leading-normal">
                @{new Date().getFullYear()} AI Recruiter. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
