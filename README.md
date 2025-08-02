# Evergreen Group Of Companies

### About the company. 
Evergreen Group delivers sustainable solutions in solar energy, borehole drilling, civil works, equipment rental, and catering. We combine innovation and expertise to provide eco-friendly, reliable services for homes and businesses. Committed to quality and efficiency, we build a greener future—one project at a time. Your sustainable future, built today.   

--- 

## How to download?
[x] open the directory where you want to download the source code 
[x] open a terminal in that directory
[x] run 
```bash 
    git clone https://github.com/blazeonitch/evergreen_goc.git 
    cd evergreen_goc
    rm -rf .git 
```

#### If you dont have git installed.
click here to download -> [Download zip](https://github.com/blazeonitch/evergreen_goc/archive/refs/heads/main.zip)

Once downloaded, extract and open source folder.  
Run 
``` bash
    rm -rf .git
```
--- 


#NOTE.
```markdown
    Please do not remove my github link from the footer. Also don't edit the websites's metadata
```

### Now host on any server you want! 


# Do this only after hosting.

Once hosted on a platform e.g. netlify, github. and there is an appropiate domain name e.g 'evergreengroupofcompanies.com', edit index.html to setup google's recaptcha to avoid spam of the contact form.  

Make sure this is uncommented in the form.
    
```html
    <form action="?" method="POST">
        <div class="g-recaptcha" data-sitekey="6Lebr44rAAAAAHCwU4VqvQQ2KqwJX12B5XfsPBSl"></div>
        <br />
        <input type="submit" value="Submit">
    </form>
```
### Then, add the website's URL to google recaptcha dev console.

Login into the company email and open google recaptcha website, there's already a 'campaign' for this company on it, make sure the data-sitekey matches that on g-recaptcha.  

save and redeploy.
