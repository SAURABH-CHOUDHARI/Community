"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/action-tooltip";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
};

export const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const { serverId } = useParams() as { serverId?: string };
  const router = useRouter();

  const onClick = () => {
    if (id) router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <button
        onClick={onClick}
        aria-label={`Navigate to ${name}`}
        className="group relative flex items-center"
      >
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            serverId !== id && "group-hover:h-[20px]",
            serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        />
        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
            serverId === id && "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image
            fill
            src={imageUrl}
            alt={name}
            sizes="(max-width: 768px) 40px, (max-width: 1200px) 48px, 64px"
          />
        </div>
      </button>
    </ActionTooltip>
  );
};
