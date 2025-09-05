"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SideBarOptions } from "@/services/Constants";
import { LogOut, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";

export function AppSidebar() {
  const path = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/auth");
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-5">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            alt="Logo"
            width={200}
            height={100}
            className="w-[150px]"
          />
        </Link>
        <Link href={"/dashboard/create-interview"}>
          <Button className="w-full mt-5">
            <Plus />
            Create New Interview
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
                <SidebarMenuItem key={index} className="p-1">
                  <SidebarMenuButton
                    asChild
                    className={`p-5 ${path == option.path && "bg-blue-100"}`}
                  >
                    <Link href={option.path}>
                      <option.icon
                        className={`${path == option.path && "text-primary"}`}
                      />
                      <span
                        className={`text-[16px] font-medium ${
                          path == option.path && "text-primary"
                        }`}
                      >
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="ghost"
          className="w-full flex items-center gap-2 p-5 hover:bg-blue-100"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          <span className="text-[16px] font-medium">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
