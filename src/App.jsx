import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Vadi Konakları',
      category: 'Konut Projesi',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Doğa ile iç içe, modern mimari hatlara sahip ultra lüks konut projesi. Kentsel dokuya uyumlu, sürdürülebilir malzemelerle inşa edilmiştir.',
      gallery:[
        {
          url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'DIŞ CEPHE',
          title: 'Modern Kütle ve Teras Tasarımı',
          description: 'Geniş cam cepheler ve teras alanlarıyla gün ışığından maksimum verim alınmıştır.',
          details: '450 m² Alan • Doğal Taş Cephe'
        },
        {
          url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'İÇ MİMARİ',
          title: 'Galeri Boşluğu ve Merdiven Detayı',
          description: 'Brüt beton yüzeyler ve ahşap dokuların dengeli birleşimiyle ferah bir iç mekan kurgulanmıştır.',
          details: 'Yüksek Tavan • Özel Ahşap İşçiliği'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'YAŞAM ALANI',
          title: 'Açık Plan Salon ve Peyzaj İlişkisi',
          description: 'Bahçe ile doğrudan bağlantı kuran geniş açıklıklar sayesinde iç ve dış mekan bütünleştirilmiştir.',
          details: 'Akıllı Ev Sistemi • Yerden Isıtma'
        }
      ]
       
    
    },
    {
      id: 2,
      title: 'Merkez İş Kulesi',
      category: 'Ticari',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Şehrin yeni silüetini oluşturan, ergonomik ofis alanları ve akıllı bina sistemleriyle donatılmış prestijli iş merkezi.',
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'CEPHE TASARIMI',
          title: 'Cam Giydirme Kule Mimarisi',
          description: 'Enerji verimli güneş kontrol camları ile modern bir iş merkezi silüeti oluşturulmuştur.',
          details: '24 Kat • LEED Gold Sertifikalı'
        },
        {
          url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'OFİS İÇ MEKAN',
          title: 'Ergonomik Çalışma ve Toplantı Alanları',
          description: 'Akustik düzenlemeler ve doğal aydınlatma odaklı açık ofis kurgusu tasarlanmıştır.',
          details: 'Akıllı İklimlendirme • Modüler Bölme'
        }
      ]
    
    },
    {
      id: 3,
      title: 'Tarihi Köşk Restorasyonu',
      category: 'Restorasyon',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      description: 'Orijinal dokusuna sadık kalınarak, günümüz teknolojisiyle güçlendirilmiş tarihi köşk restorasyon projesi.',
      gallery: [
        {
          url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          tag: 'CEPHE & RESTORASYON',
          title: 'Özgün Cephe ve Yapısal Güçlendirme',
          description: 'Tarihi yapının orijinal mimari dokusu titizlikle korunmuş, görünmeyen modern mühendislik çözümleriyle yapı günümüz standartlarına kavuşturulmuştur.',
          details: 'Özgün Malzeme Koruma • Modern İklimlendirme Entegrasyonu'
        }
      ] 
    }
  ];

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsQuoteOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#d4af37] selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-widest uppercase">
            <span className="text-white">Bozkent</span>
            <span className="text-[#d4af37] ml-2">Mimarlık</span>
          </div>
          
          <div className="hidden md:flex space-x-12 text-sm tracking-widest">
            <button onClick={() => window.scrollTo(0,0)} className="hover:text-[#d4af37] transition-colors">Ana Sayfa</button>
            <button onClick={() => scrollToSection('projeler')} className="hover:text-[#d4af37] transition-colors">Projelerimiz</button>
            <button onClick={() => scrollToSection('hakkimizda')} className="hover:text-[#d4af37] transition-colors">Hakkımızda</button>
            <button onClick={() => scrollToSection('iletisim')} className="hover:text-[#d4af37] transition-colors">İletişim</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-black border-b border-white/10 flex flex-col py-6">
            <button onClick={() => scrollToSection('projeler')} className="px-6 py-4 text-left tracking-widest hover:text-[#d4af37]">PROJELERİMİZ</button>
            <button onClick={() => scrollToSection('hakkimizda')} className="px-6 py-4 text-left tracking-widest hover:text-[#d4af37]">HAKKIMIZDA</button>
            <button onClick={() => scrollToSection('iletisim')} className="px-6 py-4 text-left tracking-widest hover:text-[#d4af37]">İLETİŞİM</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero Architecture" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6 mt-20">
          <h2 className="text-[#d4af37] tracking-[0.3em] text-sm md:text-base font-semibold mb-6">20 YILLIK TECRÜBE</h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Mimarlık Yapıyı Yalnızca Fiziksel Bir Mekan Olarak Değil, <br className="hidden md:block"/>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">Kentsel Bağlam İle Ele Almalıdır.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Büyük projeler ve kentsel dönüşümlerde, ergonomiyi estetikle buluşturuyor, yapıları çevreleriyle bir bütün olarak tasarlıyoruz.
          </p>
          <button 
            onClick={() => setIsQuoteOpen(true)}
            className="group relative px-8 py-4 bg-[#d4af37] text-black font-semibold tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              PROJE TEKLİFİ ALIN <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projeler" className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-[#d4af37] tracking-[0.2em] text-sm font-semibold mb-4">PORTFÖY</h2>
              <h3 className="text-4xl md:text-5xl font-light">İmza <span className="font-bold">Projelerimiz</span></h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group relative h-[500px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-[#d4af37] tracking-widest text-xs mb-3">{project.category}</p>
                  <h4 className="text-2xl font-light">{project.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="hakkimizda" className="py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-[#d4af37] tracking-[0.2em] text-sm font-semibold mb-4">YÖNETİM KADROSU</h2>
            <h3 className="text-4xl md:text-5xl font-light">Lider <span className="font-bold">Mimarlarımız</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-black/40 p-6 border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-48 h-64 shrink-0 overflow-hidden relative group bg-zinc-900 flex items-center justify-center text-3xl font-bold text-[#d4af37]">
                <img src="/kenan.jpg" alt="Dr. Kenan Duran" className="w-full h-full object-cover z-10 relative" onError={(e) => e.target.style.display='none'} />
                <span className="absolute z-0">KD</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Dr. Kenan Duran</h4>
                <p className="text-[#d4af37] text-sm tracking-widest mb-4">YÖNETİM KURULU BAŞKANI</p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Abdullah Gül Üniversitesi Mimarlık Bölümü mezunu olup, yüksek lisansını İstanbul Teknik Üniversitesi'nde (İTÜ), doktorasını ise Orta Doğu Teknik Üniversitesi'nde (ODTÜ) tamamlamıştır. 20 yıllık sektörel tecrübesiyle kentsel dönüşüm ve büyük ölçekli projelerin mimari vizyonunu yönetmektedir.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center bg-black/40 p-6 border border-white/5 hover:border-[#d4af37]/30 transition-colors">
              <div className="w-48 h-64 shrink-0 overflow-hidden relative group bg-zinc-900 flex items-center justify-center text-3xl font-bold text-[#d4af37]">
                <img src="/emin.jpg" alt="Mehmet Emin Duran" className="w-full h-full object-cover z-10 relative" onError={(e) => e.target.style.display='none'} />
                <span className="absolute z-0">MD</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Mehmet Emin Duran</h4>
                <p className="text-[#d4af37] text-sm tracking-widest mb-4">GENEL MÜDÜR</p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  Yıldız Teknik Üniversitesi Mimarlık Bölümü mezunu olup, yüksek lisansını İstanbul Teknik Üniversitesi'nde (İTÜ) tamamlamıştır. Modern mimari yaklaşımları ergonomik tasarım prensipleriyle buluşturarak, projelerimizin kent dokusuna uyumunu profesyonel bir bakış açısıyla yönetmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Contact */}
      <div id="iletisim" className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="text-2xl font-bold tracking-widest uppercase mb-8">
              <span className="text-white">Bozkent</span><span className="text-[#d4af37] ml-2">Mimarlık</span>
            </div>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Tasarımda ergonomi ve kent dokusuna uyumu temel alarak, geleceğin yaşam alanlarını bugünden inşa ediyoruz. Hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/emn.drnn?xtok=MW0ycjA0dnp0cnljeA==" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/mehmet-emin-duran-787818405/" target="_blank" rel="noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest mb-8 uppercase text-sm">İletişim Bilgileri</h4>
            <div className="space-y-6 text-gray-400 font-light">
              <a href="tel:+905467257090" className="flex items-center hover:text-[#d4af37] transition-colors group">
                <Phone size={18} className="mr-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                +90 546 725 70 90
              </a>
              <a href="mailto:Eminduran2005@gmail.com" className="flex items-center hover:text-[#d4af37] transition-colors group">
                <Mail size={18} className="mr-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                Eminduran2005@gmail.com
              </a>
              <div className="flex items-start group">
                <MapPin size={18} className="mr-4 mt-1 text-[#d4af37]" />
                <span className="leading-relaxed">Dimensions4ir, Maslak,<br />Maslak Meydan Sk.,<br />34485 Sarıyer/İstanbul</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest mb-8 uppercase text-sm">Çalışma Saatleri</h4>
            <div className="space-y-4 text-gray-400 font-light">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Pazartesi - Cuma</span>
                <span className="text-white">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Cumartesi</span>
                <span className="text-white">10:00 - 15:00</span>
              </div>
              <div className="flex justify-between pb-4 text-[#d4af37]">
                <span>Pazar</span>
                <span>Kapalı</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 p-8 max-w-md w-full relative">
            <button onClick={() => setIsQuoteOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
            
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-light mb-2">Proje <span className="font-bold">Teklifi Alın</span></h3>
                <p className="text-gray-400 text-sm mb-8 font-light">Detayları bizimle paylaşın, en kısa sürede dönüş yapalım.</p>
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-widest text-[#d4af37] mb-2 uppercase">Ad Soyad</label>
                    <input required type="text" className="w-full bg-black border border-white/20 p-3 text-white focus:border-[#d4af37] outline-none font-light" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#d4af37] mb-2 uppercase">Telefon Numarası</label>
                    <input required type="tel" className="w-full bg-black border border-white/20 p-3 text-white focus:border-[#d4af37] outline-none font-light" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#d4af37] mb-2 uppercase">E-posta Adresi</label>
                    <input required type="email" className="w-full bg-black border border-white/20 p-3 text-white focus:border-[#d4af37] outline-none font-light" />
                  </div>
                  <button type="submit" className="w-full bg-[#d4af37] text-black font-semibold tracking-widest uppercase py-4 hover:bg-white transition-colors">
                    Talebi Gönder
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="text-[#d4af37] mx-auto mb-6" />
                <h3 className="text-2xl font-light mb-2">Talebiniz Alındı</h3>
                <p className="text-gray-400 font-light">Ekibimiz sizinle en kısa sürede iletişime geçecektir.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black overflow-y-auto">
          <div className="min-h-screen">
            <div className="relative h-[60vh]">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white bg-black/50 p-2 rounded-full hover:bg-[#d4af37] hover:text-black transition-colors z-10">
                <X size={24} />
              </button>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                <p className="text-[#d4af37] tracking-[0.2em] text-sm font-semibold mb-4 uppercase">{selectedProject.category}</p>
                <h3 className="text-4xl md:text-6xl font-light mb-6">{selectedProject.title}</h3>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
            
            <div className="p-8 md:p-16 max-w-7xl mx-auto">
              <h4 className="text-2xl font-light mb-8">3D Render & <span className="font-bold">İç Mimari Detaylar</span></h4>
              <div className="space-y-10">
                  {selectedProject.gallery.map((item, idx) => {
                    const imgUrl = typeof item === 'string' ? item : item.url;
                    const tag = typeof item === 'string' ? null : item.tag;
                    const title = typeof item === 'string' ? null : item.title;
                    const description = typeof item === 'string' ? null : item.description;
                    const details = typeof item === 'string' ? null : item.details;

                    return (
                      <div
                        key={idx}
                        className={`flex flex-col md:flex-row gap-8 items-center bg-white/[0.02] border border-white/5 hover:border-[#d4af37]/30 transition-colors p-4 md:p-6 ${
                          idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-full md:w-3/5 overflow-hidden">
                          <img
                            src={imgUrl}
                            alt={title || `Gallery ${idx}`}
                            className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <div className="w-full md:w-2/5 space-y-4">
                          {tag && (
                            <p className="text-[#d4af37] tracking-[0.2em] text-xs font-semibold uppercase">
                              {tag}
                            </p>
                          )}
                          {title && (
                            <h5 className="text-2xl font-light text-white">
                              {title}
                            </h5>
                          )}
                          {description && (
                            <p className="text-gray-300 font-light leading-relaxed">
                              {description}
                            </p>
                          )}
                          {details && (
                            <p className="text-xs text-gray-400 tracking-wider pt-4 border-t border-white/10">
                              {details}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;