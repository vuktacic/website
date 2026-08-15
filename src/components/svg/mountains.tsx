'use client';

import { animate, onScroll, stagger, svg } from "animejs";
import { useEffect, useRef, type ReactNode } from "react";

type MountainsProps = {
    children?: ReactNode;
};

export default function Mountains({ children }: MountainsProps) {
    const stageRef = useRef<HTMLDivElement>(null);
    const mountainsRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    const handleMouseEnterMountains = (e: React.MouseEvent<HTMLDivElement>) => {
        animate(e.currentTarget, {
            color: "#ffa1ad",
            duration: 800,
            easing: 'inOutQuad'
        });
    }

    const handleMouseLeaveMountains = (e: React.MouseEvent<HTMLDivElement>) => {
        animate(e.currentTarget, {
            color: "#ffffff",
            duration: 800,
            easing: 'inOutQuad'
        });
    }

    useEffect(() => {
        const stage = stageRef.current;
        const mountains = mountainsRef.current;
        const trigger = triggerRef.current;
        const scrollTarget = mountains?.closest("footer");

        if (!stage || !mountains || !trigger || !scrollTarget) {
            return;
        }

        const drawables = Array.from(mountains.querySelectorAll<SVGPathElement>(".line"))
            .flatMap((line) => svg.createDrawable(line));
        const updateFooterHeight = () => {
            const stageHeight = stage.getBoundingClientRect().height;
            scrollTarget.style.minHeight = `${stageHeight}px`;
        };
        const resizeObserver = new ResizeObserver(updateFooterHeight);

        updateFooterHeight();
        resizeObserver.observe(stage);

        const viewportOffset = () => window.innerHeight * (100 / 703);
        const scrollObserver = onScroll({
            target: scrollTarget,
            enter: () => ({
                target: trigger.offsetTop + viewportOffset(),
                container: "end",
            }),
            leave: () => ({
                target: trigger.offsetTop + stage.offsetHeight,
                container: "end",
            }),
            sync: true,
        });
        const drawAnimation = animate(drawables, {
            draw: "0 1",
            ease: "linear",
            duration: 1000,
            delay: stagger(3),
            autoplay: scrollObserver,
        });

        return () => {
            resizeObserver.disconnect();
            drawAnimation.revert();
            scrollTarget.style.removeProperty("min-height");
        };
    }, []);

    return (
        <>
            <div ref={triggerRef} className="mt-auto h-0 w-full" aria-hidden="true" />
            <div ref={stageRef} className="flex w-full flex-col items-center" >
                {children}
                <div ref={mountainsRef} className="mountains h-auto w-full" style={{ color: "#ffffff" }} onMouseEnter={handleMouseEnterMountains} onMouseLeave={handleMouseLeaveMountains}>
                <svg viewBox="0 0 618 166" className="block w-full overflow-visible">
                <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                    <path className="line" d="M592.5 166H617" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M536.5 103C531.523 98.358 530.5 99 528.5 99" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M528.5 98.9999L506.5 100.5" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M478.318 72.7699C474.763 69.2938 474.057 72.1366 466.744 76.5126" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M521.675 116.3L516.968 111.574" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M516.968 111.574L496.976 99.9621" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M496.976 99.9621C495.426 99.1367 495.142 98.3474 495.193 98.0559" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M516.968 111.574L493.944 88.4583" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M493.944 88.4583L478.318 72.7699" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M495.193 98.0559L493.944 88.4583" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M589.781 166H592.5" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M589.781 166L583.01 158.979" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M581.514 156.7L551.746 126.479" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M551.746 126.479C550.253 124.918 549.98 123.469 550.03 122.94" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M592.5 166C592.5 166 566.893 136.711 550.191 117.982" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M550.191 117.982C543.317 110.273 537.951 104.353 536.5 103" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M550.03 122.94L550.19 117.982" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M533.348 128.41L535.632 137.442" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M556.456 146.413L536.876 138.672" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M568.918 166H589.78" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M568.919 166L557.323 155.405" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M487.761 101.423L493.944 105.54" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M488.979 103.481C493.944 113.689 501.834 119.234 505.026 121.461" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M509.904 123.212C510.645 123.775 512.646 124.558 513.128 124.731" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M520.901 128.089C523.644 128.822 526.25 131.39 526.949 132.232" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M517.053 137.442C521.738 140.234 527.406 141.48 529.582 142.076" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M536.876 138.672C536.025 138.173 535.737 137.742 535.632 137.442" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M543.263 142.977L553.076 154.473" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M553.076 154.473L558.434 160.751" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M557.323 155.405C555.607 154.034 553.893 154.426 553.076 154.473" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M419.763 30.6103C415.889 26.2447 412.235 31.2658 408.915 32.1267" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M489.285 91.7921L476.01 82.8448" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M484.139 96.5854L471.021 83.1417" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M476.01 82.8449C475.115 82.3002 472.311 82.8158 471.021 83.1417" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M471.021 83.1417L462.976 74.8965" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M462.976 74.8965C457.506 75.0695 454.618 73.368 453.924 72.8175" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M453.924 72.8176C444.012 62.3351 434.453 55.1212 430.912 52.8245" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M462.976 74.8966L428.135 39.1905" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M428.135 39.1904L419.763 30.6103" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M430.913 52.8245L428.135 39.1905" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M534.013 166H568.919" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M534.013 166L503.921 150.041" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M446.445 76.5126L456.58 86.1285" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M456.58 86.1285C460.734 85.7824 464.203 87.0555 465.418 87.7353" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M418.746 42.3891L415.433 39.451" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M413.526 36.3566L411.698 34.6794" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M411.698 34.6794L396.148 20.4159" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M411.698 34.6794L399.955 30.3613" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M399.955 30.3613L397.817 24.4576" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M384.119 30.0132C384.196 31.3416 383.528 33.4149 383.184 34.2855" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M360.14 53.0475C356.465 57.2734 350.128 61.8306 347.419 63.5809" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M396.148 20.4159C390.975 22.495 373.213 35.2028 355.518 49.2076" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M355.518 49.2076C343.757 58.5158 332.026 68.397 324.04 76.1112" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M355.518 49.2076C355.171 53.0475 347.825 64.2686 342.387 67.7693" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M339.167 71.7701L335.635 74.3956" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M508.364 166H534.013" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M508.364 166C492.916 159.014 461.356 144.835 458.698 144.011" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M458.698 144.011C456.04 143.186 451.251 145.958 449.189 147.448" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M362.937 97.4774C359.854 94.6804 352.831 94.8144 348.018 95.4484" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M348.018 95.4484C346.967 95.5869 346.021 95.7492 345.245 95.91" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M348.018 95.4484C350.701 96.4861 354.838 97.2334 356.57 97.4774" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M356.57 97.4774C358.149 97.9523 365.761 110.114 366.597 111.135" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M366.597 111.135C367.265 111.952 378.327 112.524 383.774 112.708" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M383.774 112.708C380.143 110.212 376.847 107.84 373.92 105.686" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M373.92 105.686C369.286 102.277 365.579 99.4151 362.937 97.4774" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M399.386 85.8231C400.409 85.2915 404.992 88.6684 407.155 90.4232" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M373.92 105.686C378.116 102.355 384.567 97.2548 389.932 93.0542" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M389.932 93.0542C394.874 89.1842 398.896 86.078 399.386 85.8231" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M389.932 93.0542C391.157 96.6079 385.928 101.907 383.774 104.377" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M429.327 138.015C421.895 134.911 414.87 131.455 408.34 127.888" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M408.34 127.888C399.069 122.824 390.796 117.535 383.774 112.708" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M416.898 124.874C414.786 123.568 410.312 126.339 408.34 127.888" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M463.625 158.79C458.362 153.888 443.885 143.501 431.247 134.717" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M431.247 134.717C425.839 130.957 420.767 127.491 416.898 124.874" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M431.247 134.717L438.073 132.914" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M438.073 132.914C439.581 132.738 440.398 133.134 440.618 133.354" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M440.618 133.354C444.641 136.07 451.346 137.985 454.195 138.603" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M501.645 166H508.364" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M501.645 166C493.692 162.266 492.143 161.079 488.89 158.858" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M488.89 158.858C486.288 157.082 481.058 154.676 478.769 153.694" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M472.451 166C473.151 162.945 473.478 159.519 473.554 158.188" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M472.451 166H478.232" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M478.232 166H501.645" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M478.232 166C478.232 164.71 475.114 160.255 473.554 158.188" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M418.848 98.5338L428.272 104.597" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M433.015 107.298C434.023 108.691 435.996 110.079 436.856 110.6" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M441.359 113.481L443.279 114.922" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M423.05 102.616C424.442 109.003 425.134 109.286 425.571 109.819" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M425.571 109.819L438.073 122.785" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M432.526 158.551L417.086 152.058" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M417.086 152.058C413.244 149.626 410.51 148.181 406.665 148.512" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M340.333 3.95984L332.616 11.2908" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M318.505 1.0936L319.553 3.95984" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M307.757 12.5034L311.45 13.9917" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M308.198 30.7481L311.45 28.9291" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M316.962 39.6224L322.033 28.9291" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M329.97 33.2836L330.687 34.1655" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M333.333 38.7405L331.955 36.5908" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M347.609 19.6139H342.317" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M339.12 19.1729H337.356" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M324.13 27.8943C319.341 27.4129 317.624 23.4096 317.624 21.1572" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M330.906 21.0434C330.859 21.8273 330.722 22.5296 330.517 23.1573" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M342.02 30.7481L330.517 23.1573" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M330.564 18.8574C330.837 19.6901 330.941 20.4709 330.906 21.0434" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M334.449 18.8574H330.564" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M323.066 14.1361C325.176 13.8399 326.792 14.3376 327.994 15.2043" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M327.994 15.2043C329.322 16.1626 330.143 17.5719 330.564 18.8574" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M330.517 13.0335L327.994 15.2043" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M321.229 8.54913L322.685 13.0335" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M313.367 14.6642L314.299 15.2043" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M318.375 17.3712C318.958 16.1564 318.719 16.6291 319.185 15.9239" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M315.813 15.829L318.375 17.3711" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M317.624 21.1572C317.624 20.7582 317.642 20.3841 317.676 20.0334" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M317.676 20.0335C317.783 18.9293 318.046 18.0576 318.375 17.3712" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M305.737 22.41L317.676 20.0334" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M314.299 27.8943L315.23 27.535" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M330.517 23.1573C329.802 25.3458 328.251 26.6271 326.725 27.2936" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M326.725 27.2936C325.783 27.7051 324.851 27.8824 324.13 27.8943" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M328.451 30.3887L326.725 27.2936" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M334.449 86.616L308.198 62.6369" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M308.198 62.6369C305.735 60.424 303.907 59.3182 303.108 59.1772" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M303.108 59.1772C301.485 58.8909 287.241 46.0214 280.322 39.6224" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M211.847 82.0512L205.576 76.5779" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M205.576 76.5779L189.042 89.8049" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M191.436 93.6818C186.419 89.7593 180.72 83.5301 178.515 81.0595" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M124.074 89.0324C121.146 86.3871 116.967 83.2087 114.672 82.145" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M122.625 95.5409C118.669 91.1235 113.862 87.0233 109.953 84.0116" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M109.954 84.0117C107.576 82.1795 105.531 80.7503 104.212 79.8977" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M114.672 82.145L109.953 84.0116" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M57.3377 123.64C54.9993 122.516 53.4733 121.545 53.0665 120.884" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M51.7368 121.319L9.58224 165.164" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M68.1696 132.071C66.0396 129.685 64.1275 127.971 62.4054 126.683" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M62.4054 126.683C62.3412 126.635 62.2773 126.588 62.2136 126.541" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M62.2136 126.541C60.3824 125.194 58.7685 124.327 57.3376 123.64" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M62.2136 126.541V134.369" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M62.2136 134.369C62.2136 135.387 62.8527 136.002 63.1722 136.182" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M63.1722 136.182L89.6663 150.373" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M89.6663 145.176C91.5589 144.169 92.5246 144.257 94.0421 145.562" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M94.0421 145.562C95.8875 147.15 97.5602 148.158 98.4826 148.78" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M132.109 165.413C125.241 163.222 119.551 160.148 117.197 158.807" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M117.197 158.807C114.842 157.466 113.599 156.256 111.179 155.504" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M78.7256 139.255L104.076 156.284" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M104.076 156.284L112.641 162.037" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M111.179 155.504C106.232 153.966 105.637 155.773 104.076 156.284" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M57.6307 167.419C56.6466 163.897 54.5016 158.658 53.5521 156.478" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M53.5521 156.478L50.9626 164.83" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M153.877 165.713C152.608 161.962 152.055 159.097 151.938 158.134" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M150.316 151.4L148.312 159.202" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M148.312 159.202L146.721 165.396" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M151.938 158.134C151.885 157.664 151.819 157.2 151.744 156.75" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M151.744 156.75C151.336 154.308 150.654 152.234 150.316 151.4" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M148.312 159.202L151.744 156.75" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M149.893 164.197L151.938 162.893" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M0.5 166H157.014" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M157.014 166L158.142 155.772" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M157.014 166H161.667" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M158.142 155.772L161.667 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M250.516 148.411C251.921 153.174 255.637 162.121 257.32 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M257.32 166H259.176" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M259.176 166H266.479" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M262.048 156.129C263.771 160.675 265.72 164.604 266.479 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M358.214 166C359.121 161.453 359.844 158.071 360.092 156.949" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M358.214 166H364.464" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M360.092 156.949C361.854 161.171 363.741 164.742 364.464 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M361.01 161.473L359.446 162.962" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M364.464 166H369.958" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M369.958 166H379.688" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M369.958 166C370.289 164.04 370.646 162.222 371.007 160.566" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M371.007 160.566C372.153 155.31 373.346 151.682 373.91 150.294" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M373.91 150.294C374.568 152.114 375.165 153.761 375.705 155.244" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M371.007 160.566L375.705 155.244" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M375.705 155.244C376.177 156.538 376.604 157.707 376.989 158.756" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M376.989 158.756L378.127 156.902" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M378.127 156.902C378.579 156.424 378.979 156.88 379.123 157.167" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M379.688 166H385.167" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M379.123 157.167L385.167 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M376.989 158.756C377.787 160.933 378.404 162.596 378.853 163.798" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M378.853 163.798C379.272 164.916 379.546 165.635 379.688 166" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M378.853 163.798L379.987 162.547" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M415.239 166H472.451" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M386.633 139.774C381.375 135.637 382.987 136.969 367.562 135.637" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M385.167 166H408.395" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M408.395 166H415.239" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M408.395 166C399.409 156.161 397.445 151.545 396.021 149.826" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M415.239 166L392.161 144.841" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M392.161 144.841L386.633 139.773" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M396.021 149.826C394.882 148.452 392.973 145.93 392.161 144.841" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M315.079 85.5342C311.241 82.2846 308.014 81.7243 302.72 82.9755" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M302.72 82.9755C295.169 84.4365 289.517 80.1097 285.321 78.1394" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M119.76 112.28L131.866 110.133" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M152.422 128.717L131.865 110.133" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M162.813 127.705C158.142 124.191 154.329 127.404 152.422 128.717" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M235.483 166H257.32" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M191.861 141.574C189.532 139.794 185.868 141.099 184.326 141.974" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M161.667 166H216.151" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M216.151 166H235.482" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M200.672 146.831C197.302 144.835 194.266 143.019 191.861 141.574" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M216.151 166C205.586 154.517 201.429 148.436 200.672 146.831" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M235.483 166C232.586 164.77 228.331 162.578 223.517 159.946" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M223.517 159.946C216.26 155.979 207.733 151.013 200.672 146.831" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M223.517 159.946C226.491 158.391 225.992 158.346 228.147 157.987" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M228.147 157.987C229.954 157.686 231.458 158.189 233.922 159.562" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M233.922 159.562C236.386 160.935 241.609 162.524 244.221 163.318" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M76.9639 112.571L89.1653 101.951" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M104.212 79.8977L90.6914 92.0313" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M90.6914 92.0312L57.2028 122.085" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M89.1653 101.951C90.5511 100.746 90.7602 94.8357 90.6915 92.0312" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M111.453 87.0112C111.773 90.9927 113.512 92.9953 114.341 93.4989" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M114.341 93.4989L121.14 98.0759" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M97.8103 116.563C98.0638 116.563 100.213 115.718 101.256 115.296" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M168.002 97.7292L173.991 92.278" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M173.991 92.278L182.974 99.188" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M146.752 111.274L144.286 108.855" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M144.286 108.855L153.502 101.928" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M178.515 81.0595L157.747 94.5261" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M157.747 94.5261L142.149 104.64" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M153.502 101.928C154.507 101.113 156.751 96.6537 157.748 94.5261" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M144.285 108.855L135.185 99.9296" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M135.185 99.9296L124.074 89.0324" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M138.264 111.274C136.023 105.967 135.278 101.5 135.185 99.9296" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M138.559 117.292L144.898 131.691" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M144.898 131.691C145.645 133.421 146.651 134.05 147.061 134.148" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M165.448 140.494L163.655 138.872" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M163.655 138.872L152.422 128.717" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M147.061 134.148L163.655 138.872" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M168.632 143.493L171.406 146.484" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M191.436 150.256L169.787 133.2" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M169.787 133.2L162.813 127.705" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M169.787 133.2C174.982 130.947 178.337 134.599 180.421 136.71" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M188.334 104.007L188.693 109.228" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M188.693 109.228C189.075 110.567 189.556 110.907 189.809 111.101" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M189.809 111.101L208.995 123.578" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M204.728 116.617L189.042 104.875" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M193.937 96.496H199.65" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M199.65 96.496C201.122 96.496 201.956 97.2577 202.189 97.6386" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M202.189 97.6386L211.847 107.033" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M200.665 101.828C203.915 105.129 206.462 107.266 207.33 107.921" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M211.847 111.984L219.454 114.332" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M219.454 114.332C220.672 114.789 221.95 115.665 222.437 116.046" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M222.437 116.046L231.979 124.965" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M231.979 124.965L237.988 130.582" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M231.979 124.965C233.181 124.583 233.702 124.796 233.862 124.965" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M233.862 124.965C236.79 128.055 243.846 134.244 246.999 137.047" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M246.929 165.432L247.891 160.867" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M247.891 160.867L250.516 148.411" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M247.891 160.867L252.561 156.347" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M253.349 163.808C253.517 162.967 254.295 162.232 254.662 161.969" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M259.176 166C259.502 165.246 259.817 164.382 260.114 163.48" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M260.114 163.48C261.014 160.746 261.739 157.651 262.048 156.129" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M260.114 163.48L262.202 161.969" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M257.32 149.3L255.938 147.917" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M249.507 141.07L249.991 141.969" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M266.479 166H276.822" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M276.822 166L290.169 159.396" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M298.744 151.858C303.889 149.101 308.449 148.081 310.085 147.917" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M276.822 166H292.866" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M292.866 166H358.214" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M292.866 166C307.748 152.253 317.784 142.776 320.942 139.757" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M320.942 139.757C322.215 138.263 323.778 138.535 324.4 138.858" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M324.4 138.858L328.203 140.102" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M322.81 149.853L325.714 148.746" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M337.954 143.837L341.204 146.049" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M350.974 119.234C354.321 124.113 359.034 127.839 360.973 129.092" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M352.747 113.419L342.889 103.775" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M342.889 103.775C340.563 100.768 336.293 98.0781 334.449 97.1089" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M327.304 96.169L315.079 85.5342" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M334.449 97.1089C331.273 96.1498 328.362 96.0826 327.304 96.169" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M343.259 110.05L335.281 103.109" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M335.281 103.109L327.304 96.169" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M335.281 103.109L317.218 92.9958" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M317.218 92.9958C315.507 92.4852 315.079 89.0954 315.079 87.4644" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M299.671 88.8856L294.435 83.8459" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M276.502 72.7194C278.334 73.1907 279.054 74.2684 279.185 74.7484" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M283.374 43.8559L283.963 49.5501" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M283.963 49.55C284.33 51.0161 285.021 51.9063 285.321 52.1681" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M285.321 52.1681L289.592 57.1423" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M293.126 59.7603C295.325 62.483 296.748 64.9963 297.184 65.9126" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M297.184 65.9126L308.198 71.5413" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M271.973 99.6933L282.675 92.4013" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M278.928 93.8192L280.109 90.5108" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M280.109 90.5108C280.676 89.8086 284.464 87.5175 286.287 86.4597" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M228.349 75.2446L231.678 73.8699" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M236.163 70.8311L255.843 61.0637" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M280.322 39.6224L266.147 48.4056" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M266.147 48.4056L211.847 82.0512" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M255.843 61.0637C263.087 56.6579 263.918 51.8532 266.147 48.4056" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M211.847 82.8402C213.658 83.9601 214.713 85.7153 215.014 86.4529" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M216.639 88.2592C217.795 89.3068 218.988 90.8633 219.439 91.5105" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                    <path className="line" d="M214.336 127.411C215.962 128.603 217.753 129.564 218.446 129.895" stroke="currentColor" strokeMiterlimit="16" strokeLinecap="round" />
                </g>
                </svg>
                </div>
            </div>
        </>
    );
}
