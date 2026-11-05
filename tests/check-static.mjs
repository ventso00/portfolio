import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const seo = readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
const llms = readFileSync(new URL("../llms.txt", import.meta.url), "utf8");

const check = (name, condition) => {
  assert.ok(condition, name);
  process.stdout.write("PASS " + name + "\n");
};

check("HTML de base", /^<!doctype html>/i.test(html) && /<\/html>\s*$/.test(html));
check("langue et viewport", /<html lang="fr">/.test(html) && /name="viewport"/.test(html));
check("SEO et URL canonique", /rel="canonical"/.test(html) && /name="description"/.test(html));
check("accessibilité clavier", /class="skip"/.test(html) && /aria-expanded="false"/.test(html));
check("navigation de sections", ["expertises","projets","methode","parcours","contact"].every(id => html.includes('id="'+id+'"') && html.includes('href="#'+id+'"')));
check("responsive", /@media\(max-width:680px\)/.test(html) && /prefers-reduced-motion/.test(html));
check("4 dépôts corrects", ["uptilmepulseV2","ffCV","SmartWater_project","gpoAPK"].every(repo => html.includes("github.com/ventso00/" + repo)));
check("aucune bibliothèque JS distante", !/<script[^>]+src=/.test(html));
check("contact", /mailto:rajaomanjatoventso@gmail.com/.test(html));
check("pas d'ancien poste en titre", !/<title>[^<]*Technicien/.test(html));
check("données structurées", /application\/ld\+json/.test(html));
check("ressources de référencement alignées", seo.includes("ventso.netlify.app") && llms.includes("Développeur web Full-Stack junior"));
process.stdout.write("12 contrôles statiques réussis.\n");
