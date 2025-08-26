import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Star, Calendar, Users, Gift, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function DanceStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/elegant-dance-studio-interior-with-mirrors-and-bal.png"
          onError={(e) => {
            // Fallback to background image if video fails
            const target = e.target as HTMLVideoElement
            target.style.display = "none"
            const parent = target.parentElement
            if (parent) {
              parent.style.backgroundImage = "url(/elegant-dance-studio-interior-with-mirrors-and-bal.png)"
              parent.style.backgroundSize = "cover"
              parent.style.backgroundPosition = "center"
            }
          }}
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img
            src="/elegant-dance-studio-interior-with-mirrors-and-bal.png"
            alt="Studio tańca"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 video-overlay"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Poczuj magię tańca i rytmu
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up">
            Odkryj swoją pasję w naszym nowoczesnym studiu tańca
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-medium">
              Sprawdź grafik
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">O nas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nasze studio to miejsce, gdzie pasja spotyka się z profesjonalizmem. Tworzymy przestrzeń pełną pozytywnej
              energii, gdzie każda kobieta może odkryć radość płynącą z tańca.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/elegant-dance-studio-interior-with-mirrors-and-bal.png"
                alt="Studio tańca wnętrze"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Heart className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Nasza misja</h3>
                  <p className="text-muted-foreground">
                    Inspirujemy kobiety do wyrażania siebie przez taniec, budując pewność siebie i radość z ruchu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Doświadczeni instruktorzy</h3>
                  <p className="text-muted-foreground">
                    Nasz zespół to pasjonaci tańca z wieloletnim doświadczeniem i certyfikatami międzynarodowymi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Przyjazna atmosfera</h3>
                  <p className="text-muted-foreground">
                    Tworzymy wspierającą społeczność, gdzie każda uczestniczka czuje się komfortowo i motywowana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Cennik</h2>
            <p className="text-lg text-muted-foreground">Wybierz pakiet idealny dla siebie</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl">Zajęcia grupowe</CardTitle>
                <CardDescription>Idealne na początek przygody z tańcem</CardDescription>
                <div className="text-3xl font-bold text-primary">80 zł</div>
                <div className="text-sm text-muted-foreground">za zajęcia</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>90 minut zajęć</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Maksymalnie 12 osób</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Wszystkie style tańca</span>
                </div>
                <Button className="w-full mt-6">Zapisz się</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                Najpopularniejsze
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl">Karnet miesięczny</CardTitle>
                <CardDescription>Najlepsza wartość dla regularnych uczestniczek</CardDescription>
                <div className="text-3xl font-bold text-primary">280 zł</div>
                <div className="text-sm text-muted-foreground">miesięcznie</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>8 zajęć w miesiącu</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Wszystkie zajęcia grupowe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Możliwość odrabiania</span>
                </div>
                <Button className="w-full mt-6">Wybierz karnet</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-2xl">Zajęcia indywidualne</CardTitle>
                <CardDescription>Spersonalizowane podejście do nauki</CardDescription>
                <div className="text-3xl font-bold text-primary">150 zł</div>
                <div className="text-sm text-muted-foreground">za godzinę</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>60 minut jeden na jeden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Dostosowany program</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Elastyczne terminy</span>
                </div>
                <Button className="w-full mt-6">Umów się</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Grafik zajęć</h2>
            <p className="text-lg text-muted-foreground">Znajdź idealny termin dla siebie</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-serif">Godzina</th>
                  <th className="p-4 text-left font-serif">Poniedziałek</th>
                  <th className="p-4 text-left font-serif">Wtorek</th>
                  <th className="p-4 text-left font-serif">Środa</th>
                  <th className="p-4 text-left font-serif">Czwartek</th>
                  <th className="p-4 text-left font-serif">Piątek</th>
                  <th className="p-4 text-left font-serif">Sobota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">17:00</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Balet dla początkujących</div>
                      <div className="text-muted-foreground">Anna Kowalska</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Jazz</div>
                      <div className="text-muted-foreground">Maria Nowak</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Contemporary</div>
                      <div className="text-muted-foreground">Anna Kowalska</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Pierwszy taniec</div>
                      <div className="text-muted-foreground">Warsztat</div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">18:30</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Hip-hop</div>
                      <div className="text-muted-foreground">Kasia Wiśniewska</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Balet średniozaawansowany</div>
                      <div className="text-muted-foreground">Anna Kowalska</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Salsa</div>
                      <div className="text-muted-foreground">Maria Nowak</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Taneczne urodziny</div>
                      <div className="text-muted-foreground">Na zamówienie</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">20:00</td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Bachata</div>
                      <div className="text-muted-foreground">Maria Nowak</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Stretching</div>
                      <div className="text-muted-foreground">Anna Kowalska</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">
                    <div className="bg-secondary/20 p-2 rounded text-sm">
                      <div className="font-medium">Wieczór panieński</div>
                      <div className="text-muted-foreground">Na zamówienie</div>
                    </div>
                  </td>
                  <td className="p-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Usługi specjalne</h2>
            <p className="text-lg text-muted-foreground">Wyjątkowe doświadczenia taneczne na każdą okazję</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Pierwszy taniec</CardTitle>
                <CardDescription>
                  Stwórzmy razem magiczny moment na Waszym ślubie. Indywidualne choreografie dopasowane do Waszej
                  ulubionej piosenki.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Wieczory panieńskie</CardTitle>
                <CardDescription>
                  Niezapomniana zabawa z przyjaciółkami! Taneczne warsztaty, które dodadzą energii każdemu wieczorowi
                  panieńskiemu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Zarezerwuj termin
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Zajęcia indywidualne</CardTitle>
                <CardDescription>
                  Spersonalizowane lekcje dostosowane do Twoich potrzeb i tempa nauki. Idealne dla osób chcących szybko
                  osiągnąć cele.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Umów się
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Taneczne urodziny</CardTitle>
                <CardDescription>
                  Wyjątkowe przyjęcie urodzinowe z elementami tańca. Zabawa, nauka i niezapomniane wspomnienia dla
                  każdej grupy wiekowej.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Organizuj imprezę
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Bony podarunkowe</CardTitle>
                <CardDescription>
                  Idealny prezent dla każdej miłośniczki tańca. Bony na zajęcia grupowe, indywidualne lub specjalne
                  warsztaty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Kup bon
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <CardTitle className="font-serif text-xl">Wynajem sali</CardTitle>
                <CardDescription>
                  Profesjonalna sala taneczna z lustrzanymi ścianami i wysokiej klasy systemem audio. Idealna na
                  prywatne wydarzenia.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Sprawdź dostępność
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Galeria</h2>
            <p className="text-lg text-muted-foreground">Zajrzyj do naszego świata pełnego tańca i radości</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/ballet-class-women-practicing-at-barre.png"
                alt="Zajęcia baletowe"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/hip-hop-dance-class-with-energetic-women.png"
                alt="Zajęcia hip-hop"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/contemporary-dance-performance-in-studio.png"
                alt="Taniec współczesny"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/wedding-first-dance-lesson-couple-learning.png"
                alt="Pierwszy taniec"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/bachelorette-party-dance-workshop-fun.png"
                alt="Wieczór panieński"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/jazz-dance-class-women-in-studio.png"
                alt="Zajęcia jazz"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/salsa-dance-lesson-with-instructor-and-students.png"
                alt="Zajęcia salsy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/dance-birthday-party-children-having-fun.png"
                alt="Taneczne urodziny"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Kontakt</h2>
            <p className="text-lg text-muted-foreground">Skontaktuj się z nami i rozpocznij swoją taneczną przygodę</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Adres</h3>
                  <p className="text-muted-foreground">
                    ul. Taneczna 15
                    <br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Telefon</h3>
                  <p className="text-muted-foreground">+48 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">kontakt@studiotanca.pl</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex gap-2 mt-1">
                  <Instagram className="text-primary" size={24} />
                  <Facebook className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Social Media</h3>
                  <p className="text-muted-foreground">
                    Śledź nas na Instagramie i Facebooku, aby być na bieżąco z naszymi zajęciami i wydarzeniami.
                  </p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Napisz do nas</CardTitle>
                <CardDescription>Masz pytania? Chcesz się zapisać? Skontaktuj się z nami!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Imię</label>
                    <Input placeholder="Twoje imię" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nazwisko</label>
                    <Input placeholder="Twoje nazwisko" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="twoj@email.pl" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefon</label>
                  <Input type="tel" placeholder="+48 123 456 789" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Wiadomość</label>
                  <Textarea
                    placeholder="Opowiedz nam o swoich oczekiwaniach, doświadczeniu tanecznym lub zadaj pytanie..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Wyślij wiadomość</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Studio Tańca</h3>
          <p className="text-background/80 mb-6">Poczuj magię tańca i rytmu w naszym nowoczesnym studiu</p>
          <div className="flex justify-center gap-6 mb-6">
            <Instagram className="hover:text-primary cursor-pointer transition-colors" size={24} />
            <Facebook className="hover:text-primary cursor-pointer transition-colors" size={24} />
          </div>
          <p className="text-background/60 text-sm">© 2024 Studio Tańca. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
