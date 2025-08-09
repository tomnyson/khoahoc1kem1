import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Globe,
  Target,
  Users,
  BookOpen,
  Zap,
  Clock,
  Coffee,
  TreePine,
  Brain,
  CheckCircle2,
  Quote,
  Menu,
  X,
  Star,
  Gift,
  Timer,
  TrendingUp,
  Shield,
  MessageCircle,
  Facebook,
  PhoneCall,
  Eye,
  MapPin,
} from "lucide-react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [currentToast, setCurrentToast] = useState({ name: '', action: '', package: '', time: '', location: '' });
  const [activeSection, setActiveSection] = useState('home');
  
  // SEO and structured data
  const canonicalUrl = typeof window !== "undefined" ? window.location.href : "https://edukistaynguyen.com/";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Khóa Học 1 Kèm 1: CNTT, AI & Tin Học Văn Phòng",
    description: "Lộ trình cá nhân hóa, ứng dụng AI và tự động hóa trong công việc văn phòng. Bài tập thực tế, giảng viên tận tâm.",
    provider: {
      "@type": "Organization",
      name: "EduKidsTayNguyen",
      sameAs: "https://edukidstaynguyen.com",
      telephone: "0349528472",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "1 kèm 1",
      url: canonicalUrl,
    },
  };

  const problems = [
    {
      title: "Kỹ năng chưa vững",
      description: "Word/Excel/PowerPoint rời rạc, thiếu hệ thống, khó tối ưu công việc.",
      icon: <BookOpen className="w-12 h-12 text-coffee-brown" />,
    },
    {
      title: "Chưa khai thác AI",
      description: "Không biết dùng AI để viết, phân tích, chuẩn hoá và tăng tốc quy trình.",
      icon: <Brain className="w-12 h-12 text-highland-orange" />,
    },
    {
      title: "Tốn thời gian thủ công",
      description: "Lặp lại thao tác, báo cáo và nhập liệu dễ sai sót.",
      icon: <Clock className="w-12 h-12 text-forest-green" />,
    },
  ];

  const solutions = [
    {
      title: "Tiến bộ nhanh, tập trung vào vấn đề của bạn",
      icon: <Target className="w-12 h-12 text-sky-blue" />,
    },
    {
      title: "Chất lượng kèm cặp cao, phản hồi ngay",
      icon: <Users className="w-12 h-12 text-forest-green" />,
    },
    {
      title: "Ứng dụng AI/Automation xuyên suốt lộ trình",
      icon: <Zap className="w-12 h-12 text-highland-orange" />,
    },
  ];

  const benefits = [
    {
      title: "Ứng dụng AI thực chiến",
      description: "Tối ưu công việc: viết nội dung, phân tích dữ liệu, trợ lý tác vụ.",
      icon: <Brain className="w-12 h-12 text-coffee-brown" />,
    },
    {
      title: "Tự động hóa quy trình",
      description: "Giảm thao tác thủ công bằng macro và công cụ no-code/low-code.",
      icon: <Zap className="w-12 h-12 text-highland-orange" />,
    },
    {
      title: "Thời gian linh hoạt",
      description: "Lịch học tuỳ chọn, phù hợp người đi học/đi làm.",
      icon: <Clock className="w-12 h-12 text-forest-green" />,
    },
    {
      title: "Giảng viên kèm 1:1",
      description: "Theo sát lộ trình cá nhân hoá, phản hồi ngay khi vướng mắc.",
      icon: <Users className="w-12 h-12 text-sky-blue" />,
    },
  ];

  const testimonials = [
    {
      quote: "Sau 4 buổi đã tự làm dashboard Excel và tự động hoá báo cáo tuần. Tiết kiệm 2-3 giờ mỗi tuần!",
      name: "Ngọc Anh",
      role: "Nhân viên HCNS",
      initials: "NA",
    },
    {
      quote: "Thầy kèm sát sao, bài tập thực tế. Em dùng AI để tóm tắt tài liệu và chuẩn hoá slide rất nhanh.",
      name: "Minh Quân",
      role: "Sinh viên năm 3",
      initials: "MQ",
    },
    {
      quote: "Học 1:1 nên tiến bộ nhanh. Quy trình content đã tự động hoá một phần, giảm lỗi nhập liệu.",
      name: "Thuỳ Linh",
      role: "Chuyên viên Marketing",
      initials: "TL",
    },
  ];

  // Toast notification system for fake social proof
  const customerNames = [
    'Nguyễn Thị Lan', 'Trần Văn Minh', 'Lê Thị Hương', 'Phạm Văn Nam', 'Vũ Thị Mai',
    'Hoàng Văn Đức', 'Ngô Thị Linh', 'Đặng Văn Hải', 'Bùi Thị Thu', 'Lý Văn Tài',
    'Nguyễn Thị Nga', 'Trần Văn Hùng', 'Lê Thị Oanh', 'Phạm Thị Kim', 'Vũ Văn Long'
  ];

  const packageTypes = ['Gói Trọn Khóa', 'Gói Theo Giờ'];
  const actions = ['vừa đăng ký', 'đang xem thông tin', 'vừa liên hệ tư vấn'];
  const locations = ['Hà Nội', 'TP.HCM', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Bình Dương'];

  useEffect(() => {
    const showRandomToast = () => {
      const randomName = customerNames[Math.floor(Math.random() * customerNames.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomPackage = packageTypes[Math.floor(Math.random() * packageTypes.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      const timeAgo = Math.floor(Math.random() * 10) + 1;

      setCurrentToast({
        name: randomName,
        action: randomAction,
        package: randomPackage,
        time: `${timeAgo} phút trước`,
        location: randomLocation
      });
      
      setToastVisible(true);
      
      // Hide toast after 4 seconds
      setTimeout(() => {
        setToastVisible(false);
      }, 4000);
    };

    // Show first toast after 3 seconds
    const firstTimer = setTimeout(showRandomToast, 3000);
    
    // Then show toast every 8-15 seconds randomly
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000; // 8-15 seconds
      setTimeout(showRandomToast, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  // Scroll spy effect for active menu
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'van-de', 'giai-phap', 'loi-ich', 'danh-gia', 'lien-he'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Add scrolled class to navbar
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections and cards
    const elementsToObserve = document.querySelectorAll('.section-fade-in, .card-animate');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Approximate header height
      const sectionTop = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const roadmap = [
    "Buổi 1–2: Lấy lại nền tảng tin học – quản lý file/thư mục, phím tắt, sử dụng Gmail/Drive; Word & Excel cơ bản theo chuẩn công việc.",
    "Buổi 3–4: AI căn bản cho văn phòng – viết prompt đúng, soạn email/biên bản, tóm tắt tài liệu, tạo dàn ý & slide mẫu bằng AI.",
    "Buổi 5–6: Xây dựng ứng dụng với AI không cần biết về lập trình.",
    "Buổi 7+: Tự động hoá quy trình – template hoá công việc với n8n. Cá nhân hoá theo nhu cầu.",
  ];

  return (
    <>
      <Helmet>
        <title>Khóa Học 1 Kèm 1: CNTT, AI & Tin Học Văn Phòng | EduKidsTayNguyen</title>
        <meta name="description" content="Lộ trình cá nhân hóa, ứng dụng AI và tự động hóa trong công việc văn phòng. Bài tập thực tế, giảng viên tận tâm. Gọi 0349528472 để tư vấn miễn phí." />
        <meta name="keywords" content="khóa học tin học, AI văn phòng, Excel nâng cao, Word PowerPoint, tự động hóa, 1 kèm 1" />
        <meta name="author" content="EduKidsTayNguyen" />
        <meta property="og:title" content="Khóa Học 1 Kèm 1: CNTT, AI & Tin Học Văn Phòng" />
        <meta property="og:description" content="Làm chủ Word, Excel, PowerPoint; ứng dụng AI và tự động hóa để tăng hiệu suất làm việc. Lộ trình cá nhân hóa theo mục tiêu của bạn." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khóa Học 1 Kèm 1: CNTT, AI & Tin Học Văn Phòng" />
        <meta name="twitter:description" content="Lộ trình cá nhân hóa, ứng dụng AI và tự động hóa trong công việc văn phòng. Bài tập thực tế, giảng viên tận tâm." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-100vh bg-light">
      {/* Top Navigation */}
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand fw-bold d-flex align-items-center">
            <img 
              src="https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-1/490285233_122273773562184604_6646968899620715357_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=rMUC26u-HLwQ7kNvwFXZxje&_nc_oc=AdmhHwW7yUJbTCOhgixDIzM4aaWS1jbesrDz_qeBqFXvHfGZFJZu8TKZom1vdga2u3Y&_nc_zt=24&_nc_ht=scontent.fbmv1-1.fna&_nc_gid=foFZkfz7YS5Z5ylRN671Qg&oh=00_AfXRFb10M8CpeDC7HUZ8bhjBP4nZwWOGOQlFOc6LALEfJw&oe=689CF92B"
              alt="EduKidsTayNguyen Logo"
              className="me-2 rounded-circle"
              style={{width: '40px', height: '40px', objectFit: 'cover'}}
            />
            EduKidsTayNguyen
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          
          <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <button 
                  onClick={() => scrollToSection('van-de')} 
                  className={`nav-link btn border-0 bg-transparent ${activeSection === 'van-de' ? 'active' : ''}`}
                  style={{
                    color: activeSection === 'van-de' ? '#1D582C' : '#6c757d',
                    fontWeight: activeSection === 'van-de' ? '600' : '500'
                  }}
                >
                  Vấn đề
                </button>
              </li>
              <li className="nav-item">
                <button 
                  onClick={() => scrollToSection('giai-phap')} 
                  className={`nav-link btn border-0 bg-transparent ${activeSection === 'giai-phap' ? 'active' : ''}`}
                  style={{
                    color: activeSection === 'giai-phap' ? '#1D582C' : '#6c757d',
                    fontWeight: activeSection === 'giai-phap' ? '600' : '500'
                  }}
                >
                  Giải pháp
                </button>
              </li>
              <li className="nav-item">
                <button 
                  onClick={() => scrollToSection('loi-ich')} 
                  className={`nav-link btn border-0 bg-transparent ${activeSection === 'loi-ich' ? 'active' : ''}`}
                  style={{
                    color: activeSection === 'loi-ich' ? '#1D582C' : '#6c757d',
                    fontWeight: activeSection === 'loi-ich' ? '600' : '500'
                  }}
                >
                  Lợi ích
                </button>
              </li>
              <li className="nav-item">
                <button 
                  onClick={() => scrollToSection('danh-gia')} 
                  className={`nav-link btn border-0 bg-transparent ${activeSection === 'danh-gia' ? 'active' : ''}`}
                  style={{
                    color: activeSection === 'danh-gia' ? '#1D582C' : '#6c757d',
                    fontWeight: activeSection === 'danh-gia' ? '600' : '500'
                  }}
                >
                  Đánh giá
                </button>
              </li>
              <li className="nav-item">
                <button 
                  onClick={() => scrollToSection('lien-he')} 
                  className={`nav-link btn border-0 bg-transparent ${activeSection === 'lien-he' ? 'active' : ''}`}
                  style={{
                    color: activeSection === 'lien-he' ? '#1D582C' : '#6c757d',
                    fontWeight: activeSection === 'lien-he' ? '600' : '500'
                  }}
                >
                  Liên hệ
                </button>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button 
                onClick={() => scrollToSection('lien-he')}
                className="btn btn-primary btn-lg shadow" 
                style={{backgroundColor: '#1D582C', borderColor: '#1D582C'}}
              >
                Đăng ký ngay
              </button>
              <a
                href="https://edukistaynguyen.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-5 bg-light"
        style={{background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.05), rgba(34, 139, 34, 0.05))'}}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left: copy */}
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{background: 'linear-gradient(135deg, #1D582C, #228B22)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent'}}>
                Khóa học 1 kèm 1: CNTT, AI & Tin học văn phòng
              </h1>
              <p className="lead text-muted mb-4">
                Làm chủ Word, Excel, PowerPoint; ứng dụng AI và tự động hóa để tăng hiệu suất. Lộ trình cá nhân hóa theo mục tiêu của bạn.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <button 
                  onClick={() => scrollToSection('lien-he')}
                  className="btn btn-primary btn-lg shadow" 
                  style={{backgroundColor: '#1D582C', borderColor: '#1D582C'}}
                >
                  <Phone className="me-2" style={{width: '20px', height: '20px'}} />
                  Nhận tư vấn miễn phí
                </button>
                <button
                  onClick={() => scrollToSection('giai-phap')}
                  className="btn btn-outline-secondary btn-lg"
                >
                  Xem lộ trình
                </button>
              </div>
            </div>

            {/* Right: stacked visuals */}
            <div className="col-lg-6">
              <div className="position-relative">
                {/* Top image */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=600&fit=crop"
                  alt="Minh họa khóa học 1 kèm 1 về CNTT, AI và Tin học văn phòng"
                  className="img-fluid rounded shadow-lg border"
                  style={{height: '300px', objectFit: 'cover'}}
                />

                {/* Bottom image offset */}
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop"
                  alt="Ảnh minh họa bảng tính Excel và dashboard"
                  className="img-fluid rounded shadow border position-absolute"
                  style={{
                    width: '80%',
                    height: '200px',
                    objectFit: 'cover',
                    bottom: '-30px',
                    right: '-30px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="van-de" className="py-5 section-fade-in" style={{background: 'linear-gradient(to bottom, rgba(255, 99, 71, 0.05), rgba(65, 105, 225, 0.05))'}}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="mx-auto mb-3" style={{width: '72px', height: '6px', borderRadius: '50px', background: 'linear-gradient(90deg, #FF6347, #4169E1)'}}></div>
            <h2 className="display-5 fw-bold mb-3">Bạn đang gặp những vấn đề nào?</h2>
            <p className="lead text-muted">
              Thiếu kỹ năng tin học, chưa biết áp dụng AI, thao tác thủ công tốn thời gian?
            </p>
          </div>

          <div className="row g-4">
            {problems.map((problem, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 text-center border-0 shadow-sm card-animate">
                  <div className="card-body p-4">
                    <div className="mb-3 d-flex justify-content-center">{problem.icon}</div>
                    <h3 className="h5 fw-bold mb-3">{problem.title}</h3>
                    <p className="text-muted mb-0">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="giai-phap" className="py-5 bg-white section-fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <div className="mx-auto mb-3" style={{width: '72px', height: '6px', borderRadius: '50px', background: 'linear-gradient(90deg, #FF6347, #4169E1)'}}></div>
            <h2 className="display-5 fw-bold mb-3">
              Giải pháp 1 kèm 1 tại <span style={{color: '#1D582C'}}>EduKidsTayNguyen</span>
            </h2>
            <p className="lead text-muted">
              Lộ trình cá nhân hoá theo mục tiêu; giảng viên theo sát, sửa bài trực tiếp; bài tập thực tế áp dụng ngay vào công việc.
            </p>
          </div>

          {/* Two-column: features list + roadmap */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm card-animate">
                <div className="card-body p-4">
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-start mb-3">
                      <CheckCircle2 className="me-3 mt-1 text-success" style={{width: '20px', height: '20px'}} />
                      <span>Tiến bộ nhanh, tập trung vào vấn đề của bạn.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <CheckCircle2 className="me-3 mt-1 text-success" style={{width: '20px', height: '20px'}} />
                      <span>Định hướng lộ trình, thực hành theo case áp dụng ngay.</span>
                    </li>
                    <li className="d-flex align-items-start mb-3">
                      <CheckCircle2 className="me-3 mt-1 text-success" style={{width: '20px', height: '20px'}} />
                      <span>Chất lượng kèm cặp cao, phản hồi nhanh.</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <CheckCircle2 className="me-3 mt-1 text-success" style={{width: '20px', height: '20px'}} />
                      <span>Ứng dụng AI/Automation xuyên suốt lộ trình.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm card-animate">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3" style={{color: '#1D582C'}}>
                    📚 Lộ trình tham khảo
                  </h3>
                  <p className="text-muted mb-4">Điều chỉnh theo trình độ và mục tiêu từng học viên.</p>
                  <div>
                    {roadmap.map((step, index) => (
                      <div key={index} className="d-flex align-items-start mb-3 p-2 rounded" style={{backgroundColor: index % 2 === 0 ? 'rgba(139, 69, 19, 0.05)' : 'rgba(34, 139, 34, 0.05)'}}>
                        <div className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white fw-bold" style={{width: '32px', height: '32px', backgroundColor: index % 2 === 0 ? '#1D582C' : '#228B22', fontSize: '14px', minWidth: '32px'}}>
                          {index + 1}
                        </div>
                        <p className="mb-0 fw-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="loi-ich" className="py-5 section-fade-in" style={{background: 'linear-gradient(to right, rgba(218, 165, 32, 0.05), rgba(205, 133, 63, 0.05))'}}>
        <div className="container">
          <div className="text-center mb-5">
            <div className="mx-auto mb-3" style={{width: '72px', height: '6px', borderRadius: '50px', background: 'linear-gradient(90deg, #FF6347, #4169E1)'}}></div>
            <h2 className="display-5 fw-bold mb-3">Lợi ích nổi bật</h2>
            <p className="lead text-muted">Tập trung tính thực chiến và hiệu quả công việc.</p>
          </div>

          <div className="row g-3">
            {benefits.map((b, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm card-animate">
                  <div className="card-body p-3">
                    <div className="d-flex align-items-start">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
                        {b.icon}
                      </div>
                      <div>
                        <h3 className="h6 fw-bold mb-1">{b.title}</h3>
                        <p className="small text-muted mb-0">{b.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="danh-gia" className="py-5 bg-white section-fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <div className="mx-auto mb-3" style={{width: '72px', height: '6px', borderRadius: '50px', background: 'linear-gradient(90deg, #FF6347, #4169E1)'}}></div>
            <h2 className="display-5 fw-bold mb-3">Học viên nói gì?</h2>
            <p className="lead text-muted">Một vài chia sẻ từ học viên đã hoàn thành khóa học.</p>
          </div>

          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm card-animate">
                  <div className="card-body p-4">
                    <Quote className="mb-3" style={{width: '24px', height: '24px', color: '#1D582C'}} />
                    <p className="fst-italic mb-3">"{t.quote}"</p>
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle d-flex align-items-center justify-content-center me-3 text-white fw-bold" style={{width: '40px', height: '40px', backgroundColor: '#1D582C', fontSize: '14px'}}>
                        {t.initials}
                      </div>
                      <div>
                        <div className="fw-bold">{t.name}</div>
                        <div className="small text-muted">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section with Sales Elements */}
      <section id="lien-he" className="py-5 section-fade-in" style={{background: 'linear-gradient(135deg, #1D582C, #228B22)', position: 'relative', overflow: 'hidden'}}>
        {/* Background decorative elements */}
        <div style={{position: 'absolute', top: '20px', right: '20px', width: '100px', height: '100px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(40px)'}}></div>
        <div style={{position: 'absolute', bottom: '20px', left: '20px', width: '80px', height: '80px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(30px)'}}></div>
        
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg" style={{backgroundColor: '#fff', borderRadius: '20px'}}>
                <div className="card-body p-5">
                  
                  {/* Urgency Banner */}
                  <div className="text-center mb-4">
                    <div className="badge rounded-pill px-4 py-2 mb-3" style={{backgroundColor: '#FF6347', color: 'white', fontSize: '14px', fontWeight: '600'}}>
                      <Timer className="me-2" style={{width: '16px', height: '16px'}} />
                      ⚡ KHUYẾN MÃI ĐẶC BIỆT - CHỈ CÒN 7 NGÀY ⚡
                    </div>
                  </div>

                  {/* Main Heading */}
                  <div className="text-center mb-5">
                    <h2 className="display-4 fw-bold mb-3" style={{color: '#1D582C'}}>
                      Đừng để cơ hội trôi qua!
                    </h2>
                    <p className="lead mb-4" style={{color: '#6c757d', fontSize: '1.25rem'}}>
                      Chỉ với <span className="fw-bold" style={{color: '#1D582C'}}>30 phút tư vấn miễn phí</span>, bạn sẽ có lộ trình rõ ràng để 
                      <span className="fw-bold" style={{color: '#228B22'}}> tăng lương 20-50% trong 3-6 tháng tới</span>
                    </p>
                  </div>

                  {/* Value Propositions */}
                  <div className="row mb-5">
                    <div className="col-md-4 text-center mb-3">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '80px', height: '80px', backgroundColor: 'rgba(29, 88, 44, 0.1)'}}>
                        <Star style={{width: '32px', height: '32px', color: '#1D582C'}} />
                      </div>
                      <h5 className="fw-bold mb-2" style={{color: '#1D582C'}}>Kết quả cam kết</h5>
                      <p className="text-muted mb-0">Tiết kiệm 2-3 giờ/ngày hoặc hoàn phí 100%</p>
                    </div>
                    <div className="col-md-4 text-center mb-3">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '80px', height: '80px', backgroundColor: 'rgba(34, 139, 34, 0.1)'}}>
                        <Gift style={{width: '32px', height: '32px', color: '#228B22'}} />
                      </div>
                      <h5 className="fw-bold mb-2" style={{color: '#228B22'}}>Quà tặng giá trị</h5>
                      <p className="text-muted mb-0">Template Excel + AI prompts trị giá 2.000.000đ</p>
                    </div>
                    <div className="col-md-4 text-center mb-3">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style={{width: '80px', height: '80px', backgroundColor: 'rgba(255, 99, 71, 0.1)'}}>
                        <Shield style={{width: '32px', height: '32px', color: '#FF6347'}} />
                      </div>
                      <h5 className="fw-bold mb-2" style={{color: '#FF6347'}}>Bảo hành trọn đời</h5>
                      <p className="text-muted mb-0">Hỗ trợ miễn phí mọi thắc mắc sau khóa học</p>
                    </div>
                  </div>

                  {/* Social Proof */}
                  <div className="text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                      <div className="d-flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} style={{width: '20px', height: '20px', color: '#ffc107', fill: '#ffc107'}} />
                        ))}
                      </div>
                      <span className="fw-bold" style={{color: '#1D582C'}}>4.9/5</span>
                      <span className="text-muted">(127+ học viên đánh giá)</span>
                    </div>
                    <p className="text-muted mb-0">
                      <strong>89% học viên</strong> được tăng lương hoặc thăng chức trong vòng 6 tháng
                    </p>
                  </div>

                  {/* Pricing & Offer */}
                  <div className="text-center mb-5">
                    <div className="row justify-content-center">
                      {/* Package Pricing */}
                      <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="p-4 rounded-lg h-100" style={{backgroundColor: 'rgba(29, 88, 44, 0.05)', border: '2px dashed #1D582C'}}>
                          <h5 className="fw-bold mb-3" style={{color: '#1D582C'}}>
                            <Gift className="me-2" style={{width: '24px', height: '24px'}} />
                            GÓI TRỌN KHÓA
                          </h5>
                          <div className="mb-3">
                            <span className="text-decoration-line-through text-muted fs-5">2.500.000đ</span>
                            <span className="fs-2 fw-bold ms-3" style={{color: '#1D582C'}}>1.500.000đ</span>
                          </div>
                          <div className="badge rounded-pill px-3 py-2 mb-3" style={{backgroundColor: '#228B22', color: 'white'}}>
                            TIẾT KIỆM 1.000.000đ (40%)
                          </div>
                          <p className="text-muted mb-0">
                            <small>* Thanh toán 1 lần - Trọn gói từ A-Z</small>
                          </p>
                        </div>
                      </div>

                      {/* Hourly Pricing */}
                      <div className="col-lg-5">
                        <div className="p-4 rounded-lg h-100" style={{backgroundColor: 'rgba(255, 99, 71, 0.05)', border: '2px dashed #FF6347'}}>
                          <h5 className="fw-bold mb-3" style={{color: '#FF6347'}}>
                            <Clock className="me-2" style={{width: '24px', height: '24px'}} />
                            LINH HOẠT THEO GIỜ
                          </h5>
                          <div className="mb-3">
                            <span className="text-decoration-line-through text-muted fs-5">200.000đ/h</span>
                            <span className="fs-2 fw-bold ms-3" style={{color: '#FF6347'}}>150.000đ/h</span>
                          </div>
                          <div className="badge rounded-pill px-3 py-2 mb-3" style={{backgroundColor: '#FF6347', color: 'white'}}>
                            TIẾT KIỆM 50.000đ/h (25%)
                          </div>
                          <p className="text-muted mb-0">
                            <small>* Thanh toán theo buổi học - Linh hoạt</small>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-muted">
                        <small><strong>* Ưu đãi áp dụng cho 10 học viên đầu tiên đăng ký trong tháng này</strong></small>
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="text-center mb-4">
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                      <a 
                        href="tel:0349528472" 
                        className="btn btn-lg px-5 py-3 shadow-lg position-relative overflow-hidden"
                        style={{
                          backgroundColor: '#1D582C', 
                          borderColor: '#1D582C',
                          color: 'white',
                          borderRadius: '15px',
                          fontWeight: '600',
                          fontSize: '1.1rem',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Phone className="me-2" style={{width: '20px', height: '20px'}} />
                        📞 GỌI NGAY: 0349 528 472
                        <div className="position-absolute top-0 end-0">
                          <span className="badge rounded-pill" style={{backgroundColor: '#FF6347', fontSize: '10px'}}>HOT</span>
                        </div>
                      </a>
                      
                      <a 
                        href="https://edukistaynguyen.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-outline-success btn-lg px-5 py-3"
                        style={{
                          borderWidth: '2px',
                          borderRadius: '15px',
                          fontWeight: '600',
                          fontSize: '1.1rem'
                        }}
                      >
                        <Globe className="me-2" style={{width: '20px', height: '20px'}} />
                        📝 ĐĂNG KÝ ONLINE
                      </a>
                    </div>
                  </div>

                  {/* Urgency Footer */}
                  <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center gap-2 text-muted">
                      <TrendingUp style={{width: '16px', height: '16px', color: '#228B22'}} />
                      <small>
                        <strong>23 người</strong> đã đăng ký trong 24h qua • 
                        <strong className="text-warning">Chỉ còn 7 suất</strong> trong tháng này
                      </small>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating Contact Widget */}
      <div 
        className="position-fixed" 
        style={{
          bottom: '20px', 
          right: '20px', 
          zIndex: 1050
        }}
      >
        {/* Contact Options - Show when expanded */}
        {contactOpen && (
          <div className="mb-3 d-flex flex-column gap-2 align-items-end">
            {/* Zalo Contact */}
            <div className="d-flex align-items-center contact-widget-option">
              <div 
                className="bg-white rounded-pill px-3 py-2 shadow-sm me-2"
                style={{fontSize: '14px', fontWeight: '500', color: '#1D582C'}}
              >
                Chat Zalo
              </div>
              <a 
                href="https://zalo.me/0349528472"
                target="_blank"
                rel="noreferrer"
                className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg contact-option-btn"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#0068FF',
                  color: 'white',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>Z</span>
              </a>
            </div>

            {/* Facebook Messenger */}
            <div className="d-flex align-items-center contact-widget-option">
              <div 
                className="bg-white rounded-pill px-3 py-2 shadow-sm me-2"
                style={{fontSize: '14px', fontWeight: '500', color: '#1D582C'}}
              >
                Messenger
              </div>
              <a 
                href="https://facebook.com/messages/t/edukidstaynguyen"
                target="_blank"
                rel="noreferrer"
                className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg contact-option-btn"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#1877F2',
                  color: 'white',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Facebook style={{width: '24px', height: '24px'}} />
              </a>
            </div>

            {/* Phone Call */}
            <div className="d-flex align-items-center contact-widget-option">
              <div 
                className="bg-white rounded-pill px-3 py-2 shadow-sm me-2"
                style={{fontSize: '14px', fontWeight: '500', color: '#1D582C'}}
              >
                Gọi ngay
              </div>
              <a 
                href="tel:0349528472"
                className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg contact-option-btn"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <PhoneCall style={{width: '24px', height: '24px'}} />
              </a>
            </div>
          </div>
        )}

        {/* Main Contact Toggle Button */}
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className="btn rounded-circle d-flex align-items-center justify-content-center shadow-lg position-relative"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#1D582C',
            color: 'white',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          {contactOpen ? (
            <X style={{width: '28px', height: '28px'}} />
          ) : (
            <MessageCircle style={{width: '28px', height: '28px'}} />
          )}
          
          {/* Notification Badge */}
          {!contactOpen && (
            <div 
              className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
              style={{
                top: '-5px',
                right: '-5px',
                width: '20px',
                height: '20px',
                backgroundColor: '#FF6347',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              3
            </div>
          )}
        </button>

        {/* Pulse Animation */}
        {!contactOpen && (
          <div 
            className="position-absolute rounded-circle"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              backgroundColor: '#1D582C',
              opacity: '0.3',
              animation: 'contactPulse 2s infinite',
              pointerEvents: 'none'
            }}
          />
        )}
      </div>

      {/* Mobile-only simple contact bar */}
      <div 
        className="position-fixed d-block d-md-none w-100" 
        style={{
          bottom: '0', 
          left: '0', 
          zIndex: 1049,
          background: 'linear-gradient(90deg, #1D582C, #228B22)',
          padding: '10px 15px'
        }}
      >
        <div className="d-flex gap-2">
          <a 
            href="tel:0349528472"
            className="btn flex-fill py-2 text-white fw-bold"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          >
            <PhoneCall className="me-1" style={{width: '16px', height: '16px'}} />
            Gọi ngay
          </a>
          <a 
            href="https://zalo.me/0349528472"
            target="_blank"
            rel="noreferrer"
            className="btn flex-fill py-2 text-white fw-bold"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          >
            <span className="me-1" style={{fontSize: '14px', fontWeight: 'bold'}}>Z</span>
            Zalo
          </a>
          <a 
            href="https://facebook.com/messages/t/edukidstaynguyen"
            target="_blank"
            rel="noreferrer"
            className="btn flex-fill py-2 text-white fw-bold"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          >
            <Facebook className="me-1" style={{width: '16px', height: '16px'}} />
            Messenger
          </a>
        </div>
      </div>

      {/* Social Proof Toast Notification */}
      {toastVisible && (
        <div 
          className="position-fixed d-flex align-items-center p-3 shadow-lg rounded-3"
          style={{
            bottom: '100px',
            left: '20px',
            backgroundColor: 'white',
            border: '2px solid #1D582C',
            zIndex: 1040,
            maxWidth: '320px',
            animation: 'slideInLeft 0.5s ease-out'
          }}
        >
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center me-3"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1D582C',
              color: 'white'
            }}
          >
            <Eye style={{width: '20px', height: '20px'}} />
          </div>
          <div className="flex-grow-1">
            <div className="fw-bold" style={{fontSize: '14px', color: '#1D582C'}}>
              {currentToast.name}
            </div>
            <div className="text-muted" style={{fontSize: '12px'}}>
              {currentToast.action} {currentToast.package}
            </div>
            <div className="d-flex align-items-center gap-1 mt-1">
              <MapPin style={{width: '12px', height: '12px', color: '#FF6347'}} />
              <span style={{fontSize: '11px', color: '#666'}}>
                {currentToast.location} • {currentToast.time}
              </span>
            </div>
          </div>
          <button
            onClick={() => setToastVisible(false)}
            className="btn btn-sm border-0 p-1"
            style={{color: '#ccc'}}
          >
            <X style={{width: '16px', height: '16px'}} />
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 bg-light border-top">
        <div className="container">
          <div className="text-center">
            <h3 className="h5 mb-3 d-flex align-items-center justify-content-center gap-2" style={{color: '#1D582C'}}>
              <Coffee style={{width: '24px', height: '24px'}} />
              EduKidsTayNguyen
              <TreePine style={{width: '24px', height: '24px', color: '#228B22'}} />
            </h3>
            <p className="text-muted mb-3">
              © 2025 EduKidsTayNguyen · Quyền lợi học viên: hỗ trợ sau khoá, tài liệu cập nhật.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <a
                href="tel:0349528472"
                className="btn btn-sm rounded-pill"
                style={{backgroundColor: 'rgba(255, 99, 71, 0.1)', color: '#FF6347', border: 'none'}}
              >
                <Phone style={{width: '16px', height: '16px'}} className="me-2" />
                <span>0349 528 472</span>
              </a>
              <a
                href="https://edukistaynguyen.com"
                className="btn btn-sm rounded-pill"
                style={{backgroundColor: 'rgba(34, 139, 34, 0.1)', color: '#228B22', border: 'none'}}
              >
                <Globe style={{width: '16px', height: '16px'}} className="me-2" />
                <span>Website</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
