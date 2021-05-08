import { forwardRef } from "react";

const SidebarItem = forwardRef(({ onBackClick }, ref) => {
  return (
    <li>
      <span>
        <a ref={ref} href="#algorithms_TC">
          Algorithms time complexity
        </a>
      </span>
    </li>
  );
});

export default SidebarItem;
