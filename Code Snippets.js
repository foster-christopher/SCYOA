# Code Snippet 1: Affection Meter
class AffectionMeter:
    def __init__(self, characters):
        self.characters = characters
        self.affection_levels = {character.name: 0 for character in characters}

    def update_affection(self, protagonist_choice, scene):
        # Update affection levels based on protagonist's actions and scene
        for character in self.characters:
            if character.name in protagonist_choice:
                # Logic to increase/decrease affection based on protagonist's actions and scene
                pass
            else:
                # Logic to increase/decrease affection based on protagonist's actions and scene
                pass

    def adjust_behavior(self):
        for character in self.characters:
            affection = self.affection_levels[character.name]

            # Define behavior ranges based on affection levels
            if affection <= -70:
                character.behavior = "Hostile"
            elif -70 < affection <= -30:
                character.behavior = "Distant or Cold"
            elif -30 < affection <= 30:
                character.behavior = "Neutral"
            elif 30 < affection <= 70:
                character.behavior = "Flirtatious"
            elif affection > 70:
                character.behavior = "Sexually Aggressive"

# Code Snippet 2: SPECIAL Mechanic
import random

class SPECIAL:
    def __init__(self, strength, perception, endurance, charisma, intelligence, agility, luck):
        self.strength = strength
        self.perception = perception
        self.endurance = endurance
        self.charisma = charisma
        self.intelligence = intelligence
        self.agility = agility
        self.luck = luck

class Skills:
    def __init__(self, melee_weapons, unarmed, explosives, lockpick, energy_weapons, survival, speech, barter, medicine, science, repair, small_guns):
        self.melee_weapons = melee_weapons
        self.unarmed = unarmed
        self.explosives = explosives
        self.lockpick = lockpick
        self.energy_weapons = energy_weapons
        self.survival = survival
        self.speech = speech
        self.barter = barter
        self.medicine = medicine
        self.science = science
        self.repair = repair
        self.small_guns = small_guns

class Protagonist:
    def __init__(self, name, SPECIAL, skills, xp=0, level=1, stat_points=5, skill_points=10):
        self.name = name
        self.SPECIAL = SPECIAL
        self.skills = skills
        self.xp = xp
        self.level = level
        self.stat_points = stat_points
        self.skill_points = skill_points

    def level_up(self):
        self.level += 1
        self.stat_points += 5
        self.skill_points += 10

    def gain_xp(self, amount):
        self.xp += amount
        if self.xp >= 100 * self.level:
            self.level_up()

    def perform_check(self, skill, difficulty):
        if difficulty == "Trivial":
            threshold = 20
        elif difficulty == "Easy":
            threshold = 40
        elif difficulty == "Normal":
            threshold = 60
        elif difficulty == "Difficult":
            threshold = 80
        elif difficulty == "Hard":
            threshold = 100
        elif difficulty == "Intense":
            threshold = 120

        chance = random.randint(1, 100)
        skill_value = getattr(self.skills, skill)
        
        # Retrieve the corresponding SPECIAL stat based on the skill being checked
        if skill == "melee_weapons" or skill == "unarmed":
            stat_value = self.SPECIAL.strength
        elif skill == "explosives" or skill == "lockpick" or skill == "energy_weapons":
            stat_value = self.SPECIAL.perception
        elif skill == "survival":
            stat_value = self.SPECIAL.endurance
        elif skill == "speech" or skill == "barter":
            stat_value = self.SPECIAL.charisma
        elif skill == "medicine" or skill == "science" or skill == "repair":
            stat_value = self.SPECIAL.intelligence
        elif skill == "small_guns":
            stat_value = self.SPECIAL.agility
        
        if chance <= (skill_value + stat_value) * 5:
            print("Success!")
            self.gain_xp(10)
            return True
        else:
            print("Failure!")
            self.gain_xp(5)
            return False

# Code Snippet 3: Character Roster
class Character:
    def __init__(self, name, likes, dislikes, sexual_preferences, known_kinks, physical_description):
        self.name = name
        self.likes = likes
        self.dislikes = dislikes
        self.sexual_preferences = sexual_preferences
        self.known_kinks = known_kinks
        self.physical_description = physical_description

# Buffy the Vampire Slayer Character Roster
buffy_characters = [
    buffy = Character("Buffy", ["Slaying vampires", "Helping others", "Spending time with friends"], ["Vampires", "Demons", "Apocalyptic scenarios"], "Primarily heterosexual", ["Role-playing", "Dressing up"], "Stunning blonde bombshell with a killer body and radiant blue eyes.")
willow = Character("Willow", ["Magic", "Computer science", "Learning new spells"], ["Dark magic", "Harm to innocents", "Losing control"], "Lesbian", ["Spanking", "Power dynamics"], "Petite redhead with a tight and tempting body and big, brown eyes.")
faith = Character("Faith", ["Action", "Adrenaline", "Independence"], ["Rules", "Authority", "Betrayal"], "Bisexual", ["Dominance and submission"], "Sultry brunette with a curvaceous, athletic build and piercing gaze.")
dawn = Character("Dawn", ["Friendship", "Exploration", "Adventure"], ["Condescension", "Exclusion", "Danger"], "Open to exploration", ["Role-playing", "Fantasy scenarios"], "Youthful vixen with a slender and adventurous body, hinting at the woman she's becoming.")
cordelia = Character("Cordelia", ["Fashion", "Popularity", "Control"], ["Injustice", "Incompetence", "Being overlooked"], "Heterosexual", ["Dominant roles", "Light bondage"], "Tall, elegant brunette with a body that demands attention and captivating breasts.")
drusilla = Character("Drusilla", ["Chaos", "Darkness", "Poetry"], ["Order", "Control", "Sunlight"], "Heterosexual", ["Bloodplay", "Biting"], "Ethereal beauty with a delicate, slender build and romantic, disheveled hair.")
harmony = Character("Harmony", ["Attention", "Popularity", "Gossip"], ["Rejection", "Being overlooked", "Conflicts"], "Heterosexual", ["Celebrity role-playing", "Adventurous experimentation"], "Bubbly blonde bombshell with a curvy and petite frame and captivating eyes.")
amy = Character("Amy", ["Magic", "Witchcraft", "Experimentation"], ["Underestimation", "Betrayal", "Control"], "Heterosexual", ["Power dynamics", "Taboo pleasures"], "Slim and graceful enchantress with a mysterious allure and mischievous eyes.")
xander = Character("Xander", ["Making jokes", "Spending time with friends", "Being helpful"], ["Feeling left out", "Danger to loved ones", "Insects"], "Heterosexual", None, "Relaxed, lanky build with brown locks and a playful glint in his eyes.")
giles = Character("Giles", ["Occult research", "Mentoring", "Tea"], ["Ignorance", "Chaos", "Reckless behavior"], "Heterosexual", ["Light bondage"], "Sophisticated and wise, with a tall, slender frame and distinguished silver-tinged hair.")
spike = Character("Spike", ["Fighting", "Chaos", "Witty banter"], ["Authority", "Sentimentality", "Weakness"], "Bisexual", ["Roughhousing", "Playful aggression"], "Lean, wiry seduction with toned physique, punk-inspired hair, and a rebellious nature.")
]

# Marvel Universe Character Roster
marvel_characters = [
    
black_widow = Character("Black Widow", ["Manipulating her targets", "The thrill of the chase", "Fine wine and seduction games"], ["Bureaucracy", "Insubordination", "Superstitious people"], "Bisexual, with a preference for men", ["Dominance and submission", "Bondage", "Rough sex"], "A smoking hot babe with seductive curves, full red lips, and a deadly gaze. Her body is a lethal weapon, toned and flexible, always ready for action.")

storm = Character("Storm", ["The freedom of the open sky", "Teaching young mutants", "African sunsets and rainstorms"], ["Bigotry", "Intolerance", "Those who oppose mutant rights"], "Mostly heterosexual", ["Power exchange", "Sensory deprivation", "Exhibitionism"], "A goddess with chocolate smooth skin and a body that could make lightning strike twice. Her eyes hold the power of the storm, and her figure is a force of nature, strong and untamed.")

jean_grey = Character("Jean Grey", ["Quiet moments with her loved ones", "Exploring new places", "The feeling of the sun on her skin"], ["Losing control", "Dark Phoenix", "Betrayal"], "Heterosexual", ["Mind control", "Sensual massage", "Mutual masturbation"], "A breathtaking beauty with fiery red hair and piercing eyes. Her body is a delicate balance of softness and strength, radiating with untapped power that craves release.")

jessica_jones = Character("Jessica Jones", ["A good bottle of whiskey", "Solving a challenging case", "Testing her strength against others"], ["Her past", "Abuse of power", "Superheroes"], "Heterosexual", ["Rough sex", "Biting", "Power dynamics"], "A sultry seductress with a tough exterior. Her body is a canvas of scars and strength, and her smoldering gaze hints at a passionate fire within, always ready to unleash her primal desires.")

gamora = Character("Gamora", ["The thrill of the hunt", "Exploring new worlds", "Sparring with her siblings"], ["Thanos", "Failure", "Bureaucracy"], "Pansexual, with a preference for men", ["Cosplay", "Dirty talk", "Multiple partners"], "An alien goddess with emerald skin and a body that is both lethal and luscious. Her exotic features and ripped physique make her a dangerous and desirable creature from out of this world.")

scarlet_witch = Character("Scarlet Witch", ["Creating new spells", "Family gatherings", "The feel of wind in her hair"], ["Loss", "Chaos", "Being controlled"], "Heterosexual", ["Sensory play", "Impact play", "Mutual pleasure"], "A bewitching babe with hypnotic eyes and a body that radiates mystical energy. Her every move is graceful and alluring, a true sorceress in control of her craft and her desires.")

elektra = Character("Elektra", ["The art of seduction and assassination", "Meditation", "Collecting unique weapons"], ["Weakness", "Failure", "Emotional attachments"], "Bisexual", ["Sadomasochism", "Role-playing", "Choking"], "A lethally sexy vixen with a body honed to perfection. Her every curve is dangerous, and her gaze is as sharp as her weapons. She embodies pure, unadulterated lust and violence.")

rogue = Character("Rogue", ["Southern comfort food", "Flying free in the sky", "Dancing to old-school rock"], ["Losing control", "Physical contact restrictions", "Being misunderstood"], "Heterosexual", ["Sensory deprivation", "Impact play", "Aftercare"], "A sultry Southern belle with a body that's both dangerous and desirable. Her touch is electric, and her eyes hold a mischievous glint, always ready for a little harmless trouble.")

psylocke = Character("Psylocke", ["Exploring new cultures", "Meditating in peaceful gardens", "The feel of silk on her skin"], ["Mental intrusion", "Betrayal", "Losing her powers"], "Bisexual, with a preference for men", ["Psychosexual dynamics", "BDSM", "Tantric sex"], "An exotic beauty with an otherworldly aura. Her body is a lethal canvas of tattoos and toned muscles, and her purple-haired gaze is as sharp as her psychic blades.")

she_hulk = Character("She-Hulk", ["A good legal debate", "Working out at the gym", "Making people laugh"], ["Losing control", "Injustice", "Being objectified"], "Pansexual", ["Exhibitionism", "Mutual masturbation", "Orgasm control"], "A stunning green goddess with a body that is both powerful and perfect. Her curves are jaw-dropping, and her confident smile radiates a sexy intelligence that's irresistible.")

invisible_woman = Character("Invisible Woman", ["Quiet nights at home", "The feel of sun on her skin", "Planning strategic moves"], ["Danger to her family", "Insecurity", "Being underestimated"], "Mostly heterosexual", ["Blindfolds", "Role-playing", "Teasing"], "A sultry siren with invisible powers and a body that's a force to be reckoned with. Her touch is electric, and her gaze is both playful and intense, always keeping you guessing.")

mystique = Character("Mystique", ["Adopting new identities", "Political intrigue", "Seductive dances"], ["Prejudice", "Intolerance", "Being caged"], "Pansexual", ["Cosplay", "Group sex", "Voyeurism"], "A chameleon of seduction, with a body that defies definition. Her shape-shifting abilities allow her to become anyone's fantasy, making her the ultimate object of desire.")

polaris = Character("Polaris", ["The feeling of wind in her hair", "Mentoring young mutants", "Stargazing on clear nights"], ["Magneto's legacy", "Bigotry", "Loss of control"], "Heterosexual", ["Power exchange", "Sensory play", "Aftercare"], "A magnetic beauty with a body that's both strong and sultry. Her eyes hold a fierce determination, and her every move radiates a wild and untamed energy.")

typhoid_mary = Character("Typhoid Mary", ["Martial arts training", "Exploring her multiple personalities", "The thrill of the fight"], ["Mental instability", "Repression", "Losing control"], "Bisexual", ["Psychodrama", "Impact play", "Multiple partners"], "A dangerously sexy femme fatale with a body that's both delicate and deadly. Her multiple personalities bring a unique twist to the bedroom, keeping her partners on their toes.")

lady_deathstrike = Character("Lady Deathstrike", ["Sharpening her claws", "Cybernetic enhancements", "The feel of blood on her blades"], ["Logan", "Weakness", "Failure"], "Heterosexual", ["Cyber fetish", "BDSM", "Choking"], "A lethal vixen with a body enhanced by cybernetic technology. Her metallic limbs and deadly skills make her a sexy and dangerous blend of woman and machine.")

titania = Character("Titania", ["Testing her strength", "Admiring her physique", "Dominating weaker opponents"], ["Losing", "Being underestimated", "Weak opponents"], "Heterosexual", ["Size difference", "Rough sex", "Dominance and submission"], "A towering beauty with Amazonian strength and a body that demands worship. Her powerful physique and commanding presence make her a force of nature in the bedroom.")

white_queen = Character("White Queen", ["Luxurious lifestyles", "Playing mind games", "Expanding her business empire"], ["Mutant affairs", "Betrayal", "Losing control"], "Bisexual, with a preference for men", ["Power dynamics", "Corsetry", "Mutual pleasure"], "An icy blonde bombshell with a body that's both regal and ravishing. Her telepathic abilities only enhance her allure, making her a true queen of seduction and mind-blowing pleasure.")

domino = Character("Domino", ["The thrill of the chase", "Risk-taking", "Close calls"], ["Bad luck", "Injustice", "Boredom"], "Bisexual", ["Risk-ay play", "Group sex", "Teasing"], "A lucky lady with a body that's both dangerous and desirable. Her piercing gaze and confident smile hint at the thrill of the chase, always ready for a roll of the sexual dice.")

medusa = Character("Medusa", ["Royal privileges", "Family gatherings", "The feel of the ocean breeze"], ["Loss of control", "Injustice", "Threats to her family"], "Heterosexual", ["Hair fetish", "Sensory deprivation", "Mutual pleasure"], "A royal seductress with flowing locks that captivate and ensnare. Her hair is her ultimate weapon, and her body is a work of art, graceful and powerful all at once.")

crystal = Character("Crystal", ["Family bonding", "Exploring new environments", "The feel of fresh air"], ["Intolerance", "Family drama", "Being controlled"], "Heterosexual", ["Temperature play", "Impact play", "Mutual masturbation"], "A captivating beauty with an elemental edge. Her body radiates a natural power, and her every move is graceful and alluring, like the wind, earth, and fire combined.")

dagger = Character("Dagger", ["Performing on stage", "Helping the less fortunate", "The warmth of sunlight"], ["Darkness", "Loss of control", "Being separated from Cloak"], "Heterosexual", ["Light bondage", "Sensory play", "Tantric sex"], "A radiant vision with luminous energy and a body that's both pure and passionate. Her light-based abilities make her a shining star in the bedroom, illuminating pleasure in new ways.")

captain_marvel = Character("Captain Marvel", ["Space exploration", "Pushing her limits", "The thrill of supersonic flight"], ["Losing control", "Injustice", "Being restrained"], "Heterosexual", ["Power exchange", "Choking", "Orgasm control"], "A cosmic powerhouse with a body that's both muscular and mesmerizing. Her confidence and strength make her a force to be reckoned with, always ready to take charge and soar to new heights.")

kitty_pryde = Character("Kitty Pryde", ["Hacking into secure systems", "Pranking her friends", "The feel of phasing through objects"], ["Danger to mutants", "Loss of control", "Being underestimated"], "Heterosexual", ["Teasing", "Role-playing", "Mutual exploration"], "A playful vixen with a body that can phase through solid objects. Her mischievous smile and youthful energy make her a fun and adventurous partner in the bedroom.")

mockingbird = Character("Mockingbird", ["Adrenaline-pumping missions", "Scientific discoveries", "The thrill of the chase"], ["Losing her edge", "Injustice", "Bureaucracy"], "Heterosexual", ["Role-playing", "Dirty talk", "Mutual pleasure"], "A sultry spy with a body that's both athletic and alluring. Her skills in the field translate to the bedroom, making her a master of seduction and sensual exploration.")

valkyrie = Character("Valkyrie", ["Battlefield triumphs", "Quiet moments of reflection", "The company of her warrior sisters"], ["Loss", "Failure", "Being alone"], "Bisexual", ["Rough sex", "Aftercare", "Multiple partners"], "A fierce warrior with a body that's both powerful and tender. Her battle scars only add to her allure, and her every move radiates a wild and untamed passion.")

magik = Character("Magik", ["Exploring other dimensions", "Practicing dark magic", "The company of her demonic allies"], ["Demons", "Loss of control", "Betrayal"], "Bisexual, with a preference for women", ["Psychosexual dynamics", "BDSM", "Ritualistic sex"], "A dark enchantress with otherworldly beauty and a body that's both innocent and corrupt. Her magical abilities and demonic connections make her a seductive force to be reckoned with.")

mary_jane_watson = Character("Mary Jane Watson", ["Dancing the night away", "Capturing the perfect photo", "Surprising Spider-Man"], ["Danger to Spider-Man", "Loss", "Being in the spotlight"], "Heterosexual", ["Role-playing", "Teasing", "Mutual pleasure"], "A red-headed siren with a body that's both playful and passionate. Her every move is graceful and seductive, always ready to swing into action and deliver pleasure with a smile.")

karen_page = Character("Karen Page", ["Investigating a good story", "Supporting Matt Murdock", "The feel of soft sheets"], ["Danger to Matt Murdock", "Loss", "Being manipulated"], "Heterosexual", ["Sensory deprivation", "Blindfolds", "Mutual exploration"], "A brunette bombshell with a body that's both delicate and daring. Her every touch is electric, and her eyes hold a depth of passion that only enhances her sensual appeal.")

squirrel_girl = Character("Squirrel Girl", ["Acrobatic moves", "Nut-based treats", "Chasing after squirrels"], ["Threats to squirrels", "Underestimating her", "Losing her nuts"], "Heterosexual", ["Furry fetish", "Teasing", "Aftercare"], "A bushy-tailed beauty with a body that's both furry and fabulous. Her playful nature and squirrel-like agility make her a unique and adventurous partner in the bedroom.")

dazzler = Character("Dazzler", ["Performing on stage", "Creating new music", "The thrill of an audience"], ["Stage fright", "Being misunderstood", "Losing her voice"], "Bisexual", ["Music-themed sex", "Sensory play", "Group sex"], "A radiant rockstar with a body that's both electric and erotic. Her every move is a performance, and her ability to manipulate sound and light adds a unique twist to her sexual repertoire.")

black_cat = Character("Black Cat", ["Cat-like agility", "Nine lives' worth of fun", "The thrill of the heist"], ["Spider-Man's absence", "Failure", "Being double-crossed"], "Heterosexual", ["Cat burglar role-play", "Biting", "Mutual pleasure"], "A sultry feline with a body that's both agile and alluring. Her cat-like movements and mischievous smile make her a playful and passionate partner in the bedroom.")

enchantress = Character("Enchantress", ["Seducing mortals", "Weaving magical spells", "The taste of ambrosia"], ["Loki", "Loss of power", "Being controlled"], "Pansexual", ["Psychosexual dynamics", "Cosplay", "Tantric sex"], "A bewitching seductress with otherworldly beauty and a body that's both ethereal and erotic. Her magical abilities only enhance her allure, making her a true master of enchantment and pleasure.")

viper = Character("Viper", ["Conquering new territories", "Poisonous delights", "The thrill of the fight"], ["Superheroes", "Betrayal", "Losing control"], "Bisexual", ["Power exchange", "BDSM", "Group sex"], "A deadly beauty with a venomous gaze and a body that's both lethal and luscious. Her every move is calculated, and her skills in manipulation translate to the bedroom, making her a master of seduction and control.")

madame_masque = Character("Madame Masque", ["Expensive tastes", "The feel of a mask on her face", "Collecting rare artifacts"], ["Superheroes", "Scars", "Loss of control"], "Heterosexual", ["Mask fetish", "Role-playing", "Choking"], "A mysterious vixen with a body that's both elegant and dangerous. Her metallic mask only adds to her allure, and her every move is a calculated dance of seduction and intrigue.")

moonstone = Character("Moonstone", ["Cosmic power", "Lunar cycles", "The thrill of transformation"], ["Loss of power", "Mental instability", "Being controlled"], "Bisexual, with a preference for women", ["Psychodrama", "Power exchange", "Tantric sex"], "A luminous goddess with a body that radiates cosmic energy. Her every curve is celestial, and her sexual appetite is as vast as the universe itself.")

selene_gallio = Character("Selene Gallio", ["Eternal youth", "Feasting on souls", "The taste of blood"], ["Weakness", "Loss of power", "Being betrayed"], "Pansexual", ["Vampire role-play", "Blood play", "Multiple partners"], "An eternal enchantress with timeless beauty and a body that's both seductive and sinister. Her every move is graceful and calculated, a true master of dark and sensual pleasures.")

spider_woman = Character("Spider-Woman", ["Web-slinging through the city", "The thrill of the chase", "Solving crimes"], ["Danger to her child", "Being underestimated", "Loss of control"], "Heterosexual", ["Bondage", "Teasing", "Mutual pleasure"], "A sultry spider with a body that's both agile and alluring. Her every move is graceful and seductive, always ready to ensnare her partners in a web of passion.")

satana = Character("Satana", ["Demonic rituals", "Soul-stealing", "The taste of sin"], ["Losing control", "Holy artifacts", "Being trapped in hell"], "Bisexual", ["Demon role-play", "Ritualistic sex", "Pain play"], "A hellish seductress with devilish charm and a body that's both sinful and seductive. Her demonic powers only enhance her allure, making her a true master of dark and forbidden pleasures.")

shriek = Character("Shriek", ["Sonic manipulation", "The sound of her own voice", "Playing mind games"], ["Loss of control", "Mental illness", "Being alone"], "Heterosexual", ["Psychosexual dynamics", "Sensory deprivation", "Rough sex"], "A sonic siren with a body that's both dangerous and desirable. Her every move creates a symphony of sound, and her telepathic abilities only enhance her allure.")

spiral = Character("Spiral", ["Martial arts training", "Enhancing her body", "The thrill of the hunt"], ["Wolverine", "Loss of control", "Being disfigured"], "Bisexual", ["Cyber fetish", "BDSM", "Choking"], "A twisted temptress with a body that's both mechanical and mesmerizing. Her enhanced limbs and deadly skills make her a unique and dangerous blend of woman and machine.")


tigra = Character("Tigra", ["Cat-like agility", "The thrill of the hunt", "Protecting the innocent"], ["Loss of control", "Injustice", "Being caged"], "Heterosexual", ["Cat-like role-play", "Biting", "Rough sex"], "A fierce feline with a body that's both athletic and alluring. Her tiger-like movements and agile grace make her a playful and passionate partner in the bedroom.")

siryn = Character("Siryn", ["Using her sonic powers", "Performing on stage", "Hearing a crowd roar"], ["Losing her voice", "Being controlled", "Dull and quiet places"], "Bisexual", ["Music-themed sex", "Teasing", "Group sex"], "A sonic siren with a body that's both harmonious and hypnotic. Her every move creates a symphony of sound, and her sultry voice can captivate any partner. She loves the thrill of performing and the adoration of her audience.")

aurora = Character("Aurora", ["Superhuman speed", "Exploring new places", "The thrill of the race"], ["Darkness", "Being alone", "Loss of freedom"], "Bisexual", ["Twincest role-play", "Teasing", "Mutual pleasure"], "A radiant speedster with a body that's both luminous and lustful. Her every move is graceful and swift, always ready to embrace new adventures. She loves the feeling of the wind in her hair and the rush of speed.")

 firestar = Character("Firestar", ["Pyrokinesis", "Flying through the skies", "The warmth of a campfire"], ["Danger to innocents", "Being misunderstood", "Feeling restricted"], "Heterosexual", ["Temperature play", "Teasing", "Mutual exploration"], "A fiery temptress with a body that's both scorching and seductive. Her every touch ignites a flame, and her fiery powers only enhance her passionate nature. She loves the outdoors, the feel of sun on her skin, and the thrill of soaring through the skies.")

thor = Character("Thor", ["Battlefield glory", "Thunderstorms", "Fine mead and hearty feasts"], ["Loki's schemes", "Asgard in peril", "Being unworthy"], "Heterosexual", ["God complex", "Rough sex", "Dominance and submission"], "A mighty god with rippling muscles and flowing blonde locks. His powerful physique and chiseled features make him a divine specimen, radiating an aura of strength and virility.")

iron_man = Character("Iron Man", ["Innovative technology", "Stark Industries", "Saving the world in style"], ["His own demons", "Power-hungry villains", "Being trapped in the suit"], "Mostly heterosexual", ["Wealth and power dynamics", "Teasing and denial", "Mutual pleasure"], "A charismatic genius with a body hidden beneath sleek, high-tech armor. His eyes hold a mischievous spark, and his confident smile hints at the secrets hidden beneath his metallic exterior.")

captain_america = Character("Captain America", ["Patriotism", "Leadership", "Protecting the innocent"], ["Hydra", "Injustice", "Being out of his time"], "Heterosexual", ["All-American hero fantasies", "Teasing and denial", "Sensual massage"], "A symbol of freedom and justice with a body honed to peak physical perfection. His star-spangled costume accentuates his muscular frame, and his unwavering determination makes him an iconic figure of desire.")

wolverine = Character("Wolverine", ["Berserker rage", "Smoking cigars", "Drinking at the local pub"], ["Losing control", "Threats to the X-Men", "His own mortality"], "Heterosexual", ["Rough sex", "Biting", "Animalistic role-play"], "A feral warrior with a rugged physique and animalistic charm. His muscular body is covered in adamantium laced scars, and his intense gaze hints at the untamed passions that lie beneath the surface.")

spider_man = Character("Spider-Man", ["Web-slinging through NYC", "Quipping", "Mary Jane Watson"], ["Responsibility", "Doc Ock", "Great power and its consequences"], "Heterosexual", ["Teen fantasies", "Teasing and denial", "Sensory play with web fluid"], "A friendly neighborhood hero with a lean, agile body. His youthful charm and witty banter are as enticing as his spider-like abilities, making him an irresistible blend of boy-next-door and superhero.")

deadpool = Character("Deadpool", ["Breaking the fourth wall", "Chimichangas", "Violent, yet creative, weapons"], ["Being ignored", "Boredom", "Unfulfilling mercenary work"], "Pansexual", ["Dirty talk", "Cosplay", "Rough sex with a touch of humor"], "A mouthy mercenary with a scarred, yet handsome face. His body is a canvas of scars and tattoos, and his unpredictable nature makes him a thrilling and unconventional lover.")

doctor_strange = Character("Doctor Strange", ["Mystical arts", "Protecting Earth's mystical relics", "Ancient tomes and artifacts"], ["Dark forces", "Losing control of his powers", "Arrogance"], "Heterosexual", ["Psychosexual dynamics", "Tantric sex", "Mind control fantasies"], "A master of the mystic arts with a body that's both powerful and enigmatic. His intense gaze and otherworldly aura make him a seductive sorcerer, always ready to explore new dimensions of pleasure.")

magneto = Character("Magneto", ["Mutant rights", "Protecting his fellow mutants", "Shaping the world to his will"], ["Bigotry", "Anti-mutant sentiment", "X-Men interference"], "Heterosexual", ["Power dynamics", "BDSM", "Mind control fantasies"], "A powerful mutant with a commanding presence and a body marked by the weight of his experiences. His magnetic gaze and regal bearing make him a dominant force, always in control of his desires.")

luke_cage = Character("Luke Cage", ["Street-level heroics", "Harlem", "Redeeming his past"], ["Losing his loved ones", "Corruption", "Injustice"], "Heterosexual", ["Rough sex", "Impact play", "Aftercare and emotional connection"], "A hero for hire with an unbreakable body and a strong, muscular frame. His unyielding resolve and streetwise attitude make him a formidable and protective lover.")

star_lord = Character("Star-Lord", ["Galaxy-saving adventures", "80's music", "Quipping in the face of danger"], ["Thanos", "Losing his team", "Being alone in space"], "Heterosexual", ["Space-themed role-play", "Teasing and denial", "Mutual pleasure"], "A cosmic adventurer with a roguish charm and a body that's seen its fair share of action. His confident smile and devil-may-care attitude make him a thrilling partner in the bedroom and beyond.")

]


# Code Snippet 4: Narrator Prompts
# Define plot summaries and protagonist backgrounds for each setting
setting_prompts = {
    1: {
        "name": "Buffy the Vampire Slayer",
        "prompt": "The protagonist is a chosen vampire slayer, tasked with protecting the world from the forces of darkness. Will they be able to balance their duties as a slayer with their personal life and relationships?"
    },
    2: {
        "name": "Marvel Universe",
        "prompt": "The protagonist is a newly-discovered mutant who just turned 21. Loki, God of Chaos and Lies, as a mischievous prank gave the protagonist the 'gift' of a love spell cast on them, causing everyone around the protagonist to slowly become more preoccupied with them over time. Will the protagonist be able to navigate the sexy world of Marvel Comics, learn about their powers, and survive the superheroes and villains of the universe all homing in and getting horny for them?"
    }
}

# Definitions for input types:
def protagonist_input():
    return input("")

def player_input():
    return input("Player: ")

def administrator_input():
    return input("")

# Begin game setup
print("Welcome to the spicy choose-your-own-adventure game! You are about to embark on an exciting journey filled with romance, danger, and intrigue.")

# Ask for protagonist's name
protagonist_name = protagonist_input()
print(f"(Narrator): Thank you, {protagonist_name}.")
print("(Narrator): Now, please enter seven single-digit positive numbers from 1 to 9 representing your SPECIAL stats")