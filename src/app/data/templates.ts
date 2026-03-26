export interface GitIgnoreTemplate {
  id: string;
  name: string;
  category: "language" | "framework" | "ide" | "os" | "tool";
  icon: string;
  content: string;
}

export const templates: GitIgnoreTemplate[] = [
  // Languages
  {
    id: "node",
    name: "Node.js",
    category: "language",
    icon: "🟢",
    content: `# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
.npm
.node_repl_history
*.tgz
.yarn-integrity
.env
.env.local
.env.*.local
dist/
build/
coverage/`,
  },
  {
    id: "python",
    name: "Python",
    category: "language",
    icon: "🐍",
    content: `# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
*.manifest
*.spec
pip-log.txt
pip-delete-this-directory.txt
.venv/
venv/
ENV/
.env
*.pyc`,
  },
  {
    id: "java",
    name: "Java",
    category: "language",
    icon: "☕",
    content: `# Java
*.class
*.log
*.ctxt
.mtj.tmp/
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
hs_err_pid*
replay_pid*
target/
.gradle/
build/
out/`,
  },
  {
    id: "rust",
    name: "Rust",
    category: "language",
    icon: "🦀",
    content: `# Rust
/target
Cargo.lock
**/*.rs.bk
*.pdb`,
  },
  {
    id: "go",
    name: "Go",
    category: "language",
    icon: "🔵",
    content: `# Go
*.exe
*.exe~
*.dll
*.so
*.dylib
*.test
*.out
go.work
vendor/`,
  },
  {
    id: "ruby",
    name: "Ruby",
    category: "language",
    icon: "💎",
    content: `# Ruby
*.gem
*.rbc
/.config
/coverage/
/InstalledFiles
/pkg/
/spec/reports/
/spec/examples.txt
/test/tmp/
/test/version_tmp/
/tmp/
.byebug_history
.dat*
.repl_history
*.bridgesupport
build-iPhoneOS/
build-iPhoneSimulator/
/.bundle/
/vendor/bundle
/lib/bundler/man/
.rvmrc
Gemfile.lock`,
  },
  {
    id: "csharp",
    name: "C#",
    category: "language",
    icon: "🟣",
    content: `# C#
## Build results
[Dd]ebug/
[Rr]elease/
x64/
x86/
[Aa][Rr][Mm]/
[Aa][Rr][Mm]64/
bld/
[Bb]in/
[Oo]bj/
[Ll]og/
[Ll]ogs/
*.user
*.suo
*.cache
*.docstates
*.rsuser
[Tt]est[Rr]esult*/
packages/
*.nupkg
*.snupkg
.nuget/`,
  },
  {
    id: "swift",
    name: "Swift",
    category: "language",
    icon: "🍊",
    content: `# Swift
.DS_Store
/.build
/Packages
xcuserdata/
DerivedData/
.swiftpm/configuration/registries.json
.swiftpm/xcode/package.xcworkspace/contents.xcworkspacedata
.netrc
*.playground/timeline.xctimeline`,
  },
  {
    id: "kotlin",
    name: "Kotlin",
    category: "language",
    icon: "🟠",
    content: `# Kotlin
*.class
*.log
*.ctxt
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
.gradle/
build/
out/
.kotlin/`,
  },
  {
    id: "php",
    name: "PHP",
    category: "language",
    icon: "🐘",
    content: `# PHP
/vendor/
composer.phar
composer.lock
*.cache
*.log
.env
.phpunit.result.cache
.php-cs-fixer.cache
/storage/*.key
/node_modules/`,
  },
  {
    id: "dart",
    name: "Dart",
    category: "language",
    icon: "🎯",
    content: `# Dart
.dart_tool/
.packages
build/
pubspec.lock
doc/api/
*.js_
*.js.deps
*.js.map`,
  },
  {
    id: "c",
    name: "C/C++",
    category: "language",
    icon: "⚙️",
    content: `# C/C++
*.d
*.slo
*.lo
*.o
*.obj
*.gch
*.pch
*.so
*.dylib
*.dll
*.mod
*.smod
*.lai
*.la
*.a
*.lib
*.exe
*.out
*.app
cmake-build-*/
CMakeFiles/
CMakeCache.txt`,
  },
  // Frameworks
  {
    id: "react",
    name: "React",
    category: "framework",
    icon: "⚛️",
    content: `# React
node_modules/
build/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
coverage/`,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "framework",
    icon: "▲",
    content: `# Next.js
/.next/
/out/
/build
.env*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
next-env.d.ts
node_modules/
.vercel`,
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "framework",
    icon: "💚",
    content: `# Vue.js
node_modules/
dist/
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
*.local
.vite/`,
  },
  {
    id: "angular",
    name: "Angular",
    category: "framework",
    icon: "🅰️",
    content: `# Angular
/dist
/tmp
/out-tsc
/bazel-out
node_modules/
e2e/*.js
e2e/*.map
npm-debug.log
yarn-error.log
.angular/cache
.env`,
  },
  {
    id: "svelte",
    name: "Svelte",
    category: "framework",
    icon: "🔥",
    content: `# Svelte
/node_modules
/.svelte-kit
/build
/dist
.env
.env.*
!.env.example
vite.config.js.timestamp-*
vite.config.ts.timestamp-*`,
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "framework",
    icon: "🦋",
    content: `# Flutter
.dart_tool/
.packages
build/
.flutter-plugins
.flutter-plugins-dependencies
*.iml
.metadata
pubspec.lock
/android/app/debug
/android/app/profile
/android/app/release
ios/Pods/
ios/.symlinks/`,
  },
  {
    id: "django",
    name: "Django",
    category: "framework",
    icon: "🎸",
    content: `# Django
*.log
*.pot
*.pyc
__pycache__/
local_settings.py
db.sqlite3
db.sqlite3-journal
media/
*.py[cod]
.env
.venv/
venv/
staticfiles/
static_collected/`,
  },
  {
    id: "rails",
    name: "Ruby on Rails",
    category: "framework",
    icon: "🛤️",
    content: `# Ruby on Rails
*.rbc
capybara-*.html
.rspec
/db/*.sqlite3
/db/*.sqlite3-journal
/db/*.sqlite3-[0-9]*
/public/system
/coverage/
/spec/tmp
*.orig
rerun.txt
pickle-email-*.html
.byebug_history
/log/*
/tmp/*
!/log/.keep
!/tmp/.keep
.env
/vendor/bundle
/public/packs
/public/packs-test
/node_modules
yarn-debug.log*
.yarn-integrity`,
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "framework",
    icon: "🔺",
    content: `# Laravel
/vendor/
/node_modules/
npm-debug.log
yarn-error.log
.env
.env.backup
Homestead.json
Homestead.yaml
/public/hot
/public/storage
/storage/*.key
.phpunit.result.cache
.idea/`,
  },
  {
    id: "unity",
    name: "Unity",
    category: "framework",
    icon: "🎮",
    content: `# Unity
/[Ll]ibrary/
/[Tt]emp/
/[Oo]bj/
/[Bb]uild/
/[Bb]uilds/
/[Ll]ogs/
/[Uu]ser[Ss]ettings/
/[Mm]emoryCaptures/
/[Rr]ecordings/
/[Aa]ssets/Plugins/Editor/JetBrains*
ExportedObj/
.vs/
*.csproj
*.unityproj
*.sln
*.suo
*.tmp
*.user
*.userprefs
*.pidb
*.booproj
*.svd
*.pdb
*.mdb
*.opendb
*.VC.db
*.apk
*.aab
*.unitypackage
*.pem
crashlytics-build.properties
sysinfo.txt
*.stackdump`,
  },
  {
    id: "nuxt",
    name: "Nuxt.js",
    category: "framework",
    icon: "💚",
    content: `# Nuxt.js
node_modules/
.nuxt/
.output/
dist/
.env
*.log`,
  },
  // IDEs
  {
    id: "vscode",
    name: "VS Code",
    category: "ide",
    icon: "💙",
    content: `# VS Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
.history/
*.vsix`,
  },
  {
    id: "jetbrains",
    name: "JetBrains",
    category: "ide",
    icon: "🧠",
    content: `# JetBrains IDEs
.idea/
*.iws
*.iml
*.ipr
out/
cmake-build-*/`,
  },
  {
    id: "vim",
    name: "Vim",
    category: "ide",
    icon: "📝",
    content: `# Vim
[._]*.s[a-v][a-z]
!*.svg
[._]*.sw[a-p]
[._]s[a-rt-v][a-z]
[._]ss[a-gi-z]
[._]sw[a-p]
Session.vim
Sessionx.vim
.netrwhist
*~
tags
[._]*.un~`,
  },
  {
    id: "emacs",
    name: "Emacs",
    category: "ide",
    icon: "🔮",
    content: `# Emacs
*~
\\#*\\#
/.emacs.desktop
/.emacs.desktop.lock
*.elc
auto-save-list
tramp
.\\#*
.org-id-locations
*_archive
*_flymake.*
/eshell/history
/eshell/lastdir
/elpa/
*.rel
/auto/
.cask/
dist/
flycheck_*.el
.projectile
.dir-locals.el
/network-security.data`,
  },
  {
    id: "sublimetext",
    name: "Sublime Text",
    category: "ide",
    icon: "🟡",
    content: `# Sublime Text
*.tmlanguage.cache
*.tmPreferences.cache
*.stTheme.cache
*.sublime-workspace
*.sublime-project
sftp-config.json
sftp-config-alt*.json
Package Control.last-run
Package Control.ca-list
Package Control.ca-bundle
Package Control.system-ca-bundle
Package Control.cache/
Package Control.ca-certs/
Package Control.merged-ca-bundle
Package Control.user-ca-bundle
oscrypto-ca-bundle.crt
bh_unicode_properties.cache
GitHub.sublime-settings`,
  },
  {
    id: "xcode",
    name: "Xcode",
    category: "ide",
    icon: "🔨",
    content: `# Xcode
build/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata/
*.moved-aside
*.xccheckout
*.xcscmblueprint
DerivedData/
*.hmap
*.ipa
*.dSYM.zip
*.dSYM
timeline.xctimeline
playground.xcworkspace`,
  },
  // OS
  {
    id: "macos",
    name: "macOS",
    category: "os",
    icon: "🍎",
    content: `# macOS
.DS_Store
.AppleDouble
.LSOverride
Icon
._*
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk`,
  },
  {
    id: "windows",
    name: "Windows",
    category: "os",
    icon: "🪟",
    content: `# Windows
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
*.stackdump
[Dd]esktop.ini
$RECYCLE.BIN/
*.cab
*.msi
*.msix
*.msm
*.msp
*.lnk`,
  },
  {
    id: "linux",
    name: "Linux",
    category: "os",
    icon: "🐧",
    content: `# Linux
*~
.fuse_hidden*
.directory
.Trash-*
.nfs*`,
  },
  // Tools
  {
    id: "docker",
    name: "Docker",
    category: "tool",
    icon: "🐳",
    content: `# Docker
docker-compose*.yml
.dockerignore
Dockerfile*`,
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "tool",
    icon: "🏗️",
    content: `# Terraform
**/.terraform/*
*.tfstate
*.tfstate.*
crash.log
crash.*.log
*.tfvars
*.tfvars.json
override.tf
override.tf.json
*_override.tf
*_override.tf.json
.terraformrc
terraform.rc`,
  },
  {
    id: "env",
    name: "Environment Files",
    category: "tool",
    icon: "🔐",
    content: `# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env.staging
*.pem
*.key`,
  },
  {
    id: "logs",
    name: "Logs",
    category: "tool",
    icon: "📋",
    content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*`,
  },
];

export const categories = [
  { id: "language", name: "Languages", icon: "💻" },
  { id: "framework", name: "Frameworks", icon: "🏗️" },
  { id: "ide", name: "IDEs & Editors", icon: "📝" },
  { id: "os", name: "Operating Systems", icon: "💿" },
  { id: "tool", name: "Tools & Other", icon: "🔧" },
];
