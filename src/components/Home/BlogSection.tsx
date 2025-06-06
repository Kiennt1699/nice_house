import React from 'react';
import image from '../../assets/travel/kyco.jpg';
import image2 from '../../assets/travel/thapbanhit.jpg';
import image3 from '../../assets/travel/eogio.jpg';

const BlogSection = () => {
    const blogs = [
        {
            id: 1,
            title: 'Đảo Kỳ Co',
            description: 'Kỳ Co - khám phá bức tranh tuyệt đẹp với biển xanh, cát trắng.',
            imgSrc: image,
        },
        {
            id: 2,
            title: 'Tháp Bánh Ít',
            description: 'Tháp Bánh Ít - dấu ấn của Vương triều Chăm Pa hùng mạnh.',
            imgSrc: image2,
        },
        {
            id: 3,
            title: 'Eo Gió',
            description: 'Eo Gió - vẻ đẹp hoang sơ làm say lòng người.',
            imgSrc: image3,
        },
    ];

    const sectionStyle = {
        padding: '5rem 2rem',
        backgroundColor: '#f8f9fa',
        textAlign: 'center' as const,
    };

    const titleStyle = {
        fontSize: '2.4rem',
        fontWeight: '700',
        color: '#343a40',
        marginBottom: '3rem',
        letterSpacing: '1px',
        fontFamily: 'Brice Regular SemiExpanded',
        textTransform: 'uppercase' as const
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        padding: '0 2rem',
    };

    const cardStyle = {
        position: 'relative' as const,
        borderRadius: '15px',
        overflow: 'hidden' as const,
        transition: 'transform 0.4s ease-in-out',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        cursor: 'pointer',
    };

    const imageWrapperStyle = {
        overflow: 'hidden' as const,
        position: 'relative' as const,
    };

    const imageStyle = {
        width: '100%',
        height: '350px',
        transition: 'transform 0.5s ease',
    };

    const overlayStyle = {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 0,
        transition: 'opacity 0.5s ease',
    };

    const infoStyle = {
        padding: '1.5rem',
        backgroundColor: '#fff',
        borderTop: '5px solid #28a745',
        textAlign: 'left' as const,
    };

    const nameStyle = {
        fontSize: '1.75rem',
        fontWeight: '600' as const,
        marginBottom: '0.75rem',
    };

    const descriptionStyle = {
        fontSize: '1.1rem',
        color: '#666',
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget.querySelector('img') as HTMLImageElement;
        const overlay = event.currentTarget.querySelector('.image-overlay') as HTMLDivElement;
        if (target) {
            target.style.transform = 'scale(1.15)';
        }
        if (overlay) {
            overlay.style.opacity = '1';
        }
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.currentTarget.querySelector('img') as HTMLImageElement;
        const overlay = event.currentTarget.querySelector('.image-overlay') as HTMLDivElement;
        if (target) {
            target.style.transform = 'scale(1)';
        }
        if (overlay) {
            overlay.style.opacity = '0';
        }
    };

    return (
        <div style={sectionStyle}>
            <h2 style={titleStyle}>CẢNH ĐẸP XỨNG TẦM TRẢI NGHIỆM</h2>
            <div style={gridStyle}>
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        style={cardStyle}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <div style={imageWrapperStyle}>
                            <img style={imageStyle} src={blog.imgSrc} alt={blog.title} />
                            <div className="image-overlay" style={overlayStyle}></div>
                        </div>
                        <div style={infoStyle}>
                            <h3 style={nameStyle}>{blog.title}</h3>
                            <p style={descriptionStyle}>{blog.description}</p>
                            <a>(Ảnh: sưu tầm)</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
