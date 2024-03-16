
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";


export function Selector({selectedLanguage,setSelectedLanguage,languages}) {


  const handleLanguageChange = (language) => {
    setSelectedLanguage(languages[language]);
  };

  return (
    <div className="flex items-center space-x-4 ml-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="xs" variant="outline" className="text-black text-xs p-1" >
          <GlobeIcon className="mr-1 h-4 w-4 text-red text-xs"  />
            {selectedLanguage.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1">
        
          
          {/* <DropdownMenuItem className="text-black text-xs " onClick={() => handleLanguageChange("english")}>
            {selectedLanguage === "english" && <CheckIcon className="w-2 h-2 text-xs -translate-x-1 mr-2 text-black" />}
            English
          </DropdownMenuItem>
          <DropdownMenuItem className="text-black text-xs" onClick={() => handleLanguageChange("french")}>
            {selectedLanguage === "french" && <CheckIcon className="w-4 h-4 text-xs -translate-x-1 mr-1 text-black" />}
            French
          </DropdownMenuItem>
          <DropdownMenuItem className="text-black text-xs" onClick={() => handleLanguageChange("swahili")}>
            {selectedLanguage === "swahili" && <CheckIcon className="w-4 h-4 text-xs -translate-x-1 mr-1 text-black" />}
            Swahili
          </DropdownMenuItem> */}

{Object.keys(languages).map((key) => (
        <DropdownMenuItem className="text-black text-xs " onClick={() => handleLanguageChange(key)} key={key}>
          {selectedLanguage === key && <CheckIcon className="w-4 h-4 text-xs -translate-x-1 mr-1 text-black" />}
          {languages[key].name}
        </DropdownMenuItem>
      ))}
    
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}



function GlobeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="purple"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>)
  );
}
