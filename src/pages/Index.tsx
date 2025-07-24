import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Calendar, Code, Palette, Video, Megaphone, Settings, Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Index = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  
  const themes = [
    { name: 'Default', value: 'default', primary: '222.2 47.4% 11.2%', accent: '210 40% 96.1%' },
    { name: 'Dark', value: 'dark', primary: '210 40% 98%', accent: '217.2 32.6% 17.5%' },
    { name: 'Blue', value: 'blue', primary: '221.2 83.2% 53.3%', accent: '210 40% 96.1%' },
    { name: 'Green', value: 'green', primary: '142.1 76.2% 36.3%', accent: '138.5 76.5% 96.7%' },
    { name: 'Purple', value: 'purple', primary: '263.4 70% 50.4%', accent: '270 100% 98%' }
  ];

  const areasOfInterest = [
    { icon: Megaphone, title: 'Marketing', description: 'Digital marketing strategies and campaigns' },
    { icon: Users, title: 'Social Media', description: 'Content creation and community management' },
    { icon: Palette, title: 'Content Creation', description: 'Graphics, copywriting, and visual design' },
    { icon: Video, title: 'Video Editing', description: 'Post-production and motion graphics' },
    { icon: Calendar, title: 'Event Management', description: 'Planning and executing club events' },
    { icon: Code, title: 'Software Development', description: 'Web and app development projects' }
  ];

  const achievements = [
    { title: 'Best Creative Club 2023', description: 'University-wide recognition' },
    { title: '50+ Events Organized', description: 'Workshops, competitions, and seminars' },
    { title: '500+ Active Members', description: 'From all academic disciplines' },
    { title: 'Industry Partnerships', description: 'Collaborations with tech companies' }
  ];

  const coordinators = [
    { name: 'Dr. Rajesh Kumar', department: 'Computer Science', email: 'rajesh.kumar@geu.ac.in' },
    { name: 'Prof. Priya Sharma', department: 'Design & Media', email: 'priya.sharma@geu.ac.in' },
    { name: 'Dr. Amit Singh', department: 'Marketing', email: 'amit.singh@geu.ac.in' }
  ];

  const changeTheme = (theme: any) => {
    setCurrentTheme(theme.value);
    const root = document.documentElement;
    
    if (theme.value === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--primary', theme.primary);
      root.style.setProperty('--accent', theme.accent);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo and Navigation */}
      <header className="bg-card border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Graphic Geeks</h1>
                <p className="text-sm text-muted-foreground">Graphic Era University</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['Introduction', 'About', 'Join', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Theme Switcher */}
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <select 
                value={currentTheme} 
                onChange={(e) => {
                  const theme = themes.find(t => t.value === e.target.value);
                  if (theme) changeTheme(theme);
                }}
                className="bg-background border border-border rounded px-2 py-1 text-sm"
              >
                {themes.map(theme => (
                  <option key={theme.value} value={theme.value}>{theme.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-foreground">Welcome to Graphic Geeks</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The premier creative and technical club of Graphic Era University, bringing together passionate students 
              from all disciplines to explore innovation, creativity, and technology. Join us in shaping the future 
              through collaborative learning and hands-on projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {areasOfInterest.slice(0, 3).map((area, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                  <area.icon className="w-4 h-4 mr-2" />
                  {area.title}
                </Badge>
              ))}
            </div>
            <Button size="lg" onClick={() => scrollToSection('join')} className="px-8 py-3">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Graphic Geeks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dynamic community fostering creativity, innovation, and technical excellence across all academic disciplines
            </p>
          </div>

          {/* Awards & Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Our Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Areas of Interest</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areasOfInterest.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="p-6">
                    <area.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Coordinators */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Faculty Coordinators</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {coordinators.map((coordinator, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{coordinator.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{coordinator.department}</p>
                    <p className="text-xs text-muted-foreground">{coordinator.email}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Club Section */}
      <section id="join" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Join Graphic Geeks</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to students from all courses and disciplines. Whether you're in Engineering, Management, 
              Arts, or any other field - we welcome your unique perspective!
            </p>
            
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-3 border border-border rounded-md bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-3 border border-border rounded-md bg-background"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Course/Department"
                    className="w-full p-3 border border-border rounded-md bg-background"
                  />
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Select Area of Interest</option>
                    {areasOfInterest.map((area, index) => (
                      <option key={index} value={area.title}>{area.title}</option>
                    ))}
                  </select>
                </div>
                <textarea 
                  placeholder="Why do you want to join Graphic Geeks? Tell us about your interests and skills..."
                  rows={4}
                  className="w-full p-3 border border-border rounded-md bg-background"
                />
                <Button size="lg" className="w-full">
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Social Media */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Connect With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow us on social media and stay updated with our latest events and activities
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {[
              { icon: Facebook, color: 'text-blue-600', label: 'Facebook' },
              { icon: Instagram, color: 'text-pink-600', label: 'Instagram' },
              { icon: Twitter, color: 'text-blue-400', label: 'Twitter' },
              { icon: Linkedin, color: 'text-blue-700', label: 'LinkedIn' },
              { icon: Github, color: 'text-gray-800', label: 'GitHub' }
            ].map((social, index) => (
              <button 
                key={index}
                className={`w-12 h-12 rounded-full border border-border hover:scale-110 transition-transform flex items-center justify-center hover:shadow-lg ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </button>
            ))}
          </div>
          
          <div className="bg-card p-6 rounded-lg max-w-md mx-auto">
            <h3 className="font-semibold mb-4 text-foreground">Contact Information</h3>
            <p className="text-sm text-muted-foreground mb-2">📧 graphicgeeks@geu.ac.in</p>
            <p className="text-sm text-muted-foreground mb-2">📱 +91 98765 43210</p>
            <p className="text-sm text-muted-foreground">📍 Graphic Era University, Dehradun</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Graphic Geeks - Graphic Era University. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
