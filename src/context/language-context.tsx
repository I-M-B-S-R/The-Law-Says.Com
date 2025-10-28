
'use client';

import { translateTextAction } from '@/app/actions';
import React, { createContext, useContext, useState, useCallback, useEffect, useTransition } from 'react';

const MISSION_STATEMENT_ORIGINAL: string[] = [
    `Our Mission Is To Provide Every Adult Living In Or Passing Through The United States Of America Or One Of The States Contained Therein, Including There Countys, Municipalities, Or Tribes, With The Most Comprehensive, Quick Reference Mobile App And Legal Research Platform Ever Built! It Has <strong>&quot;AUTHENTIC, VERIFIED, AND REGULARLY UPDATED CONTENT FROM OFFICIAL GOVERNMENT SOURCES&quot;!</strong> It Will Allow All Persons Using This APP To Understand Their <strong>RIGHTS, AND THEIR OBLIGATIONS, AS PRESCRIBED BY LAW.</strong> The Laws That Govern All Of Us Who Reside In, Or Are Passing Through, &quot;The United States Of America&quot;.`,
    `It Is Our Belief That Most Disagreements Can Be Settled Simply By People &quot;Knowing What The Laws Say, How Judges Have Interpreted Those Laws In The Past, And Are Likely To Interpret Them In Their Particular Case, And How Their Decisions Have Been Documented In (Case Law), And Again, What Their Rights and Obligations Are Under Law, That We All Have To Each Other, And To Those Authorities That Have Been Placed Above Us When We Are In, Or Passing Through Their Districts, As Prescribed By Law&quot;!`,
    `In The Past People Had To Rely On Legal Advice Provided By Lawyers In Making Their Decisions, But The Simple Fact Of The Matter Is Most People Cannot Afford A Lawyer's Advice! So, They Called The Police To Settle These Disagreements, The Problem With That Is The Police May Not Know What The Laws Are Themselves, That Deal With The Disagreement That The People Are Having!`,
    `And Unfortunately, When The Police Don't Know The Laws Themselves They Can Be Influenced Not By The Laws Themselves, But By The Perceived Finances Or Political Standing That 1 Party May Have Over The Other In Their Decision Making! <strong>&quot;THATS NOT JUSTICE!&quot;</strong>`,
    `The Other Thing The Police Do Is To Tell People To Go To Court To Settle The Matter, And <strong class="text-destructive font-bold">&quot;IF YOU NEED TO GO TO COURT, YOU WILL NEED A LAWYER! * &quot;</strong> A Lawyer That Most People Cannot Afford! So, They End Up Forfeiting Their Rights Are Not Proving True To Their Obligations As Prescribed By Law! <strong>&quot;THATS NOT JUSTICE EATHER!&quot;</strong>`,
    `It Is Our Hope That By People Using &quot;The-Law-Says.Com&quot;, people will understand their &quot;Rights and their Obligations&quot; As Prescribed By Law. The Laws That Govern All Of Us Who Reside In Or Who Are Passing Through One Of The Great States Or Territories In The United States. Educating Them To Be Better Law Abiding Citizens Who Can Settle Disagreements Peacefully, And Legally, Even If They're Reading Ability, Or Their Eyesight, Is Very Limited, They Can Listen To The Information, Without The Need Of The Police, Paralegals, Lawyers, Or Our CourtSystem, Or Even Our Lawmakers!`
];

const WHY_LAWYER_TEXT_ORIGINAL: string[] = [
    `Knowing the law (statutes, cases, etc.) is like knowing the rules of a game—but courts are a high-stakes arena with complex procedures, strategies, and pitfalls that go far beyond the black-letter law. Representing yourself (pro se) is allowed in most courts, but it's often risky and less effective. Here's why lawyers are typically essential:`,
    `<strong>Procedural Rules and Court Etiquette:</strong> Courts follow strict rules (e.g., Federal Rules of Civil Procedure or Evidence). Missing a filing deadline, improperly formatting documents, or failing to serve papers correctly can get your case dismissed. Lawyers navigate these to avoid procedural traps.`,
    `<strong>Evidence and Admissibility:</strong> Not everything you &quot;know&quot; can be presented. Rules of evidence dictate what's admissible (e.g., hearsay is often excluded). Lawyers know how to gather, authenticate, and introduce evidence, cross-examine witnesses, and object to opponents' tactics.`,
    `<strong>Advocacy and Persuasion:</strong> Trials involve arguing persuasively to judges or juries. Lawyers are trained in rhetoric, legal research, and framing arguments. They spot weaknesses in the other side's case that a layperson might miss.`,
    `<strong>Negotiation and Settlements:</strong> Most cases (over 90% in civil matters) settle out of court. Lawyers negotiate deals, mediate, or plea bargain, often getting better outcomes than going solo.`,
    `<strong>Complexity and Interpretation:</strong> Laws aren't always straightforward—statutes can conflict, and case law evolves. Lawyers interpret nuances, cite precedents, and adapt to judges' preferences. For example, what seems like a clear &quot;self-defense&quot; law might hinge on subtle facts or state-specific rulings.`,
    `<strong>Objectivity and Emotional Detachment:</strong> People in their own cases get emotional, leading to poor decisions. Lawyers provide impartial advice and strategy.`,
    `<strong>Resources and Expertise:</strong> Lawyers have access to legal databases, networks, and experience from similar cases. In criminal matters, public defenders are often appointed if you can't afford one, as the stakes (like jail time) are high.`,
    `In short, while you can represent yourself, statistics show pro se litigants win far less often (e.g., in civil cases, success rates drop significantly without counsel). Courts encourage lawyers to ensure fairness and efficiency. If you're facing a legal issue, consulting one early (even for advice) is wise—many offer free initial consultations.`
];

const UI_TEXT_ORIGINAL: Record<string, string> = {
    translate: 'Translate',
    listen: 'Listen',
    stop: 'Stop',
    federalLaws: 'Federal Laws',
    stateLaws: 'State Laws',
    ourMission: 'Our Mission',
    whyLawyer: 'Why Do You Need a Lawyer Even If You Know What the Law Says?'
};

// Use a unique separator that is unlikely to appear in the text
const SEPARATOR = '|||';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  isTranslating: boolean;
  isLoading: boolean;
  missionStatement: string[];
  whyLawyerText: string[];
  uiText: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('English');
  const [isTranslating, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const [missionStatement, setMissionStatement] = useState<string[]>(MISSION_STATEMENT_ORIGINAL);
  const [whyLawyerText, setWhyLawyerText] = useState<string[]>(WHY_LAWYER_TEXT_ORIGINAL);
  const [uiText, setUiText] = useState<Record<string, string>>(UI_TEXT_ORIGINAL);

  const translateBatch = useCallback(async (texts: string[], targetLanguage: string) => {
    if (targetLanguage === 'English') return texts;
    const combinedText = texts.join(SEPARATOR);
    try {
      const result = await translateTextAction({
        textToTranslate: combinedText,
        targetLanguage: targetLanguage,
      });
      if (result.success && result.data) {
        return result.data.translatedText.split(SEPARATOR);
      }
      return texts; // Return original texts on failure
    } catch (error) {
      console.error("Batch translation failed", error);
      return texts; // Return original texts on error
    }
  }, []);

  const handleSetLanguage = (newLanguage: string) => {
    startTransition(() => {
      setLanguage(newLanguage);
    });
  };

  useEffect(() => {
    if (language === 'English') {
      setMissionStatement(MISSION_STATEMENT_ORIGINAL);
      setWhyLawyerText(WHY_LAWYER_TEXT_ORIGINAL);
      setUiText(UI_TEXT_ORIGINAL);
      return;
    }

    const translateAllContent = async () => {
      setIsLoading(true);

      const allUiTextValues = Object.values(UI_TEXT_ORIGINAL);
      const textsToTranslate = [
        ...allUiTextValues,
        ...MISSION_STATEMENT_ORIGINAL,
        ...WHY_LAWYER_TEXT_ORIGINAL
      ];

      const translatedTexts = await translateBatch(textsToTranslate, language);

      const uiKeys = Object.keys(UI_TEXT_ORIGINAL);
      const newUiText: Record<string, string> = {};
      uiKeys.forEach((key, index) => {
        newUiText[key] = translatedTexts[index];
      });
      setUiText(newUiText);

      const missionStartIndex = allUiTextValues.length;
      const newMissionStatement = translatedTexts.slice(missionStartIndex, missionStartIndex + MISSION_STATEMENT_ORIGINAL.length);
      setMissionStatement(newMissionStatement);

      const whyLawyerStartIndex = missionStartIndex + MISSION_STATEMENT_ORIGINAL.length;
      const newWhyLawyerText = translatedTexts.slice(whyLawyerStartIndex, whyLawyerStartIndex + WHY_LAWYER_TEXT_ORIGINAL.length);
      setWhyLawyerText(newWhyLawyerText);

      setIsLoading(false);
    };

    const transitionWrapper = () => {
      startTransition(() => {
        translateAllContent();
      });
    };

    transitionWrapper();
  }, [language, translateBatch]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, isTranslating, isLoading, missionStatement, whyLawyerText, uiText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
