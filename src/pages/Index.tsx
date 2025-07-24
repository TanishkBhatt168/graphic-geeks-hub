import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Calendar, Code, Palette, Video, Megaphone, Settings, Facebook, Instagram, Twitter, Linkedin, Github, Star, Zap, Shield, Cpu, Globe, Trophy, Target, BookOpen, Briefcase, ChevronRight, Sparkles, Flame } from 'lucide-react';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const themes = [
    { name: 'Cyber Purple', value: 'default', class: '' },
    { name: 'Matrix Green', value: 'cyber', class: 'theme-cyber' },
    { name: 'Neon Pink', value: 'neon', class: 'theme-neon' },
    { name: 'Fire Orange', value: 'fire', class: 'theme-fire' },
    { name: 'Ice Blue', value: 'ice', class: 'theme-ice' }
  ];

  const areasOfInterest = [
    { 
      icon: Megaphone, 
      title: 'Digital Marketing & Strategy', 
      description: 'SEO, SEM, social media marketing, brand strategy, and market research',
      projects: ['Brand Campaign Design', 'Market Analysis', 'Social Media Strategy']
    },
    { 
      icon: Users, 
      title: 'Social Media Management', 
      description: 'Community building, content curation, influencer partnerships, and analytics',
      projects: ['Instagram Growth Hacks', 'LinkedIn Networking', 'Content Calendar']
    },
    { 
      icon: Palette, 
      title: 'Creative Content Design', 
      description: 'UI/UX design, graphic design, brand identity, and visual storytelling',
      projects: ['Logo Design', 'Website Mockups', 'Brand Guidelines']
    },
    { 
      icon: Video, 
      title: 'Video Production & Editing', 
      description: 'Motion graphics, video editing, 3D animation, and multimedia production',
      projects: ['Club Promotional Videos', '3D Animations', 'Event Documentation']
    },
    { 
      icon: Calendar, 
      title: 'Event Management & PR', 
      description: 'Corporate events, workshops, seminars, sponsorship acquisition',
      projects: ['Tech Conferences', 'Workshop Series', 'Industry Meetups']
    },
    { 
      icon: Code, 
      title: 'Software Development', 
      description: 'Full-stack development, mobile apps, AI/ML projects, and blockchain',
      projects: ['Club Management System', 'Mobile App', 'AI Chatbot']
    },
    { 
      icon: Shield, 
      title: 'Cybersecurity & Ethical Hacking', 
      description: 'Penetration testing, security audits, and cybersecurity awareness',
      projects: ['Security Workshops', 'CTF Competitions', 'Vulnerability Testing']
    },
    { 
      icon: Cpu, 
      title: 'AI & Machine Learning', 
      description: 'Deep learning, computer vision, NLP, and data science projects',
      projects: ['Recommendation Systems', 'Image Recognition', 'Chatbot Development']
    }
  ];

  const achievements = [
    { 
      icon: Trophy, 
      title: 'National Innovation Award 2023', 
      description: 'Winner of AICTE Innovation Challenge',
      impact: '₹50,000 Grant Received'
    },
    { 
      icon: Star, 
      title: 'Best Student Club of the Year', 
      description: 'Recognized by University Senate',
      impact: 'University-wide Recognition'
    },
    { 
      icon: Users, 
      title: '1000+ Active Members', 
      description: 'Largest technical club in North India',
      impact: 'Multi-disciplinary Community'
    },
    { 
      icon: Globe, 
      title: '25+ Industry Partnerships', 
      description: 'Collaborations with Google, Microsoft, Amazon',
      impact: 'Internship Placements'
    },
    { 
      icon: Briefcase, 
      title: '150+ Job Placements', 
      description: 'Member success in top companies',
      impact: 'Average CTC: ₹12 LPA'
    },
    { 
      icon: BookOpen, 
      title: '200+ Workshops Conducted', 
      description: 'Skills development across technologies',
      impact: '10,000+ Students Trained'
    }
  ];

  const pastEvents = [
    {
      title: 'HackGeeks 2023',
      type: 'Hackathon',
      participants: '500+',
      prizes: '₹1 Lakh',
      description: '48-hour intensive coding marathon'
    },
    {
      title: 'Design Summit',
      type: 'Conference',
      participants: '300+',
      prizes: 'Industry Mentorship',
      description: 'UI/UX and graphic design showcase'
    },
    {
      title: 'Startup Pitch Battle',
      type: 'Competition',
      participants: '50 Teams',
      prizes: '₹50,000 Seed Fund',
      description: 'Entrepreneurship and innovation challenge'
    }
  ];

  const coordinators = [
    { 
      name: 'Dr. Rajesh Kumar Singh', 
      department: 'Computer Science & Engineering', 
      email: 'rajesh.kumar@geu.ac.in',
      specialization: 'AI/ML & Data Science',
      experience: '15+ years in academia and industry'
    },
    { 
      name: 'Prof. Priya Sharma', 
      department: 'Design & Media Studies', 
      email: 'priya.sharma@geu.ac.in',
      specialization: 'UX Design & Visual Communication',
      experience: 'Former Creative Director at Wipro'
    },
    { 
      name: 'Dr. Amit Singh Chauhan', 
      department: 'Business Administration', 
      email: 'amit.singh@geu.ac.in',
      specialization: 'Digital Marketing & Entrepreneurship',
      experience: 'Ex-Marketing Head at Flipkart'
    }
  ];

  const clubLeaders = [
    { name: 'Arjun Patel', role: 'President', department: 'CSE', year: '4th Year', expertise: 'Full Stack Development' },
    { name: 'Sneha Gupta', role: 'Vice President', department: 'Design', year: '3rd Year', expertise: 'UI/UX Design' },
    { name: 'Rohit Sharma', role: 'Technical Head', department: 'CSE', year: '4th Year', expertise: 'DevOps & Cloud' },
    { name: 'Priya Singh', role: 'Creative Head', department: 'Mass Comm', year: '3rd Year', expertise: 'Content Strategy' },
    { name: 'Karan Verma', role: 'Events Head', department: 'MBA', year: '2nd Year', expertise: 'Event Management' },
    { name: 'Anisha Joshi', role: 'Marketing Head', department: 'BBA', year: '3rd Year', expertise: 'Digital Marketing' }
  ];

  const changeTheme = (theme: any) => {
    setCurrentTheme(theme.value);
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('theme-cyber', 'theme-neon', 'theme-fire', 'theme-ice');
    
    // Add new theme class if exists
    if (theme.class) {
      root.classList.add(theme.class);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div 
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            animationDelay: '1s'
          }}
        ></div>
      </div>

      {/* Header with Logo and Navigation */}
      <header className="relative z-50 bg-card/80 border-b border-border/50 sticky top-0 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary animate-glow-pulse">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-50 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Graphic Geeks
                </h1>
                <p className="text-sm text-muted-foreground">Graphic Era University</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {['Introduction', 'About', 'Events', 'Join', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-foreground hover:text-primary transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Theme Switcher */}
            <div className="flex items-center space-x-3 bg-card/50 rounded-xl p-2 border border-border/50">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <select 
                value={currentTheme} 
                onChange={(e) => {
                  const theme = themes.find(t => t.value === e.target.value);
                  if (theme) changeTheme(theme);
                }}
                className="bg-transparent border-none text-sm font-medium text-foreground focus:outline-none cursor-pointer"
              >
                {themes.map(theme => (
                  <option key={theme.value} value={theme.value} className="bg-card">
                    {theme.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="introduction" className="relative z-10 py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 animate-slide-up">
              <Badge className="px-6 py-2 text-sm bg-gradient-accent border-0 text-accent-foreground shadow-glow-accent animate-glow-pulse mb-6">
                <Star className="w-4 h-4 mr-2" />
                Elite Technical & Creative Community
              </Badge>
            </div>
            
            <h2 className="text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
              Welcome to<br />
              <span className="relative">
                Graphic Geeks
                <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl animate-pulse"></div>
              </span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up">
              The premier creative and technical club of <span className="text-primary font-semibold">Graphic Era University</span>, 
              bringing together passionate students from all disciplines to explore innovation, creativity, and cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              {areasOfInterest.slice(0, 4).map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-6 py-3 text-sm bg-card/50 border border-border/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow-primary cursor-pointer"
                >
                  <area.icon className="w-5 h-5 mr-2" />
                  {area.title.split(' ')[0]}
                </Badge>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('join')} 
                className="px-12 py-4 text-lg bg-gradient-primary border-0 shadow-glow-primary hover:shadow-glow-primary hover:scale-110 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Join Our Elite Community
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('about')} 
                className="px-12 py-4 text-lg border-primary/50 hover:bg-gradient-primary hover:text-primary-foreground hover:border-0 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 mr-2" />
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <Badge className="px-4 py-2 bg-gradient-secondary border-0 text-secondary-foreground mb-6">
              <Target className="w-4 h-4 mr-2" />
              About Our Community
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
              Empowering Innovation & Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A dynamic ecosystem fostering creativity, innovation, and technical excellence across all academic disciplines
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">Our Elite Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden bg-card/50 border-border/50 hover:bg-gradient-dark hover:shadow-glow-primary transition-all duration-500 hover:scale-105"
                >
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow-primary group-hover:animate-glow-pulse">
                      <achievement.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 group-hover:text-primary-foreground/80 transition-colors">
                      {achievement.description}
                    </p>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {achievement.impact}
                    </Badge>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areasOfInterest.map((area, index) => (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden bg-card/30 border-border/30 hover:bg-gradient-accent hover:shadow-glow-accent transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 shadow-glow-accent group-hover:animate-float">
                      <area.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold mb-2 text-foreground group-hover:text-accent-foreground transition-colors text-sm">
                      {area.title}
                    </h4>
                    <p className="text-xs text-muted-foreground group-hover:text-accent-foreground/80 transition-colors mb-3">
                      {area.description}
                    </p>
                    <div className="space-y-1">
                      {area.projects.slice(0, 2).map((project, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-accent/30 text-accent">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">Elite Faculty Coordinators</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coordinators.map((coordinator, index) => (
                <Card key={index} className="group relative overflow-hidden bg-card/50 border-border/50 hover:bg-gradient-secondary hover:shadow-glow-secondary transition-all duration-500">
                  <CardContent className="p-8 text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow-secondary group-hover:animate-glow-pulse">
                      <Users className="w-10 h-10 text-secondary-foreground" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-secondary-foreground transition-colors mb-2">
                      {coordinator.name}
                    </h4>
                    <p className="text-sm text-primary font-semibold mb-2">{coordinator.department}</p>
                    <Badge className="bg-accent/20 text-accent border-accent/30 mb-3">
                      {coordinator.specialization}
                    </Badge>
                    <p className="text-xs text-muted-foreground group-hover:text-secondary-foreground/80 transition-colors mb-2">
                      {coordinator.experience}
                    </p>
                    <p className="text-xs text-muted-foreground group-hover:text-secondary-foreground/60 transition-colors">
                      {coordinator.email}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Student Leadership */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">Student Leadership Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {clubLeaders.map((leader, index) => (
                <Card key={index} className="group relative overflow-hidden bg-card/30 border-border/30 hover:bg-gradient-primary hover:shadow-glow-primary transition-all duration-500">
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-primary group-hover:animate-float">
                      <Shield className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-primary-foreground transition-colors">
                      {leader.name}
                    </h4>
                    <Badge className="bg-accent text-accent-foreground my-2">{leader.role}</Badge>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                      {leader.department} • {leader.year}
                    </p>
                    <p className="text-xs text-primary font-semibold mt-2">{leader.expertise}</p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative z-10 py-24 bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="px-4 py-2 bg-gradient-danger border-0 text-destructive-foreground mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Major Events
            </Badge>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-danger bg-clip-text text-transparent">
              Flagship Events & Competitions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pastEvents.map((event, index) => (
              <Card key={index} className="group relative overflow-hidden bg-card/50 border-border/50 hover:bg-gradient-danger hover:shadow-glow-accent transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-destructive text-destructive-foreground">{event.type}</Badge>
                    <Flame className="w-6 h-6 text-destructive animate-pulse" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-foreground group-hover:text-destructive-foreground transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-destructive-foreground/80 transition-colors mb-4">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Participants:</span>
                      <span className="text-xs font-semibold text-destructive">{event.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-muted-foreground">Prizes:</span>
                      <span className="text-xs font-semibold text-destructive">{event.prizes}</span>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-danger opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="relative z-10 py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="px-6 py-3 bg-gradient-primary border-0 text-primary-foreground mb-8 shadow-glow-primary">
              <Sparkles className="w-5 h-5 mr-2" />
              Elite Membership Application
            </Badge>
            
            <h2 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Join the Elite Circle
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Open to students from all courses and disciplines. Whether you're in Engineering, Management, 
              Arts, or any other field - we welcome your unique perspective and talents!
            </p>
            
            <Card className="relative overflow-hidden bg-card/50 border-border/50 shadow-elegant">
              <CardContent className="p-10 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Course/Department"
                    className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <select className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                    <option>Select Primary Interest</option>
                    {areasOfInterest.map((area, index) => (
                      <option key={index} value={area.title}>{area.title}</option>
                    ))}
                  </select>
                </div>
                <textarea 
                  placeholder="Why do you want to join Graphic Geeks? Tell us about your passion, skills, and what unique value you'll bring to our community..."
                  rows={5}
                  className="w-full p-4 border border-border/50 rounded-xl bg-background/50 backdrop-blur-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <Button 
                  size="lg" 
                  className="w-full py-4 text-lg bg-gradient-primary border-0 shadow-glow-primary hover:shadow-glow-primary hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Submit Elite Application
                </Button>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="px-4 py-2 bg-gradient-secondary border-0 text-secondary-foreground mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Connect & Collaborate
          </Badge>
          
          <h2 className="text-5xl font-bold mb-8 bg-gradient-secondary bg-clip-text text-transparent">
            Join Our Digital Universe
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Follow us across platforms and stay connected with our elite community of innovators and creators
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            {[
              { icon: Facebook, label: 'Facebook', gradient: 'from-blue-600 to-blue-400' },
              { icon: Instagram, label: 'Instagram', gradient: 'from-pink-600 to-purple-600' },
              { icon: Twitter, label: 'Twitter', gradient: 'from-blue-400 to-cyan-400' },
              { icon: Linkedin, label: 'LinkedIn', gradient: 'from-blue-700 to-blue-500' },
              { icon: Github, label: 'GitHub', gradient: 'from-gray-800 to-gray-600' }
            ].map((social, index) => (
              <button 
                key={index}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${social.gradient} hover:scale-125 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl group`}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
              </button>
            ))}
          </div>
          
          <Card className="max-w-2xl mx-auto bg-card/50 border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl mb-6 text-foreground">Elite Contact Hub</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Megaphone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">graphicgeeks@geu.ac.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Graphic Era University, Dehradun</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-danger rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">Office Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-card/80 to-background border-t border-border/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Graphic Geeks
                </h3>
                <p className="text-sm text-muted-foreground">Innovation • Creativity • Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-2">
              © 2024 Graphic Geeks - Graphic Era University. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of innovators and creators
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
