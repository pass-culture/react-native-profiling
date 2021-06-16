# react-native-profiling.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-profiling"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  Device profiling in react native
                   DESC
  s.homepage     = "https://github.com/pass-culture/react-native-profiling"
  s.license      = "MIT"
  s.authors      = { "Antoine Garcia" => "antoine.garcia@passculture.app" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/pass-culture/react-native-profiling.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true

  s.dependency "React"
end

