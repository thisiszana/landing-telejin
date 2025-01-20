export const MenuBars = ({
    wrapperClassName,
    size,
    fill = "currentColor",
    ...props
  }) => {
    return (
      <div className={wrapperClassName || "w-fit"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width={size || 18}
          height={size || 18}
          {...props}
        >
          <path
            fill={fill}
            d="M24,3.5c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5ZM6.5,20H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H6.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5ZM14.5,11H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H14.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
          />
        </svg>
      </div>
    );
  };