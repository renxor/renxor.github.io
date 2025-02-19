const personalData = {
    name: "Renxo",
    age: "18",
    city: "جزري",
    email: "bganwar810@gmail.com",
    about: "My name is Anwar and I am in the first year of high school.",
    skills: [
        "devloper",
        "devloper of discord",
        "devloper of discord bots"
    ],
    socialMedia: {
        facebook: "https://www.facebook.com/share/18NJ4dfibx/",
        twitter: "almost",
        instagram: "https://www.instagram.com/anwar_renxo?igsh=a21hbTJmM3l6YTR6"
    },
    profileImage: "اسم-صورتك.jpg"
};

// دالة لتحديث محتوى الصفحة
function updatePageContent() {
    // تحديث الاسم والصورة
    document.querySelector('h1').textContent = personalData.name;
    document.querySelector('.profile-image').src = personalData.profileImage;

    // تحديث المعلومات الشخصية
    const personalInfoList = document.querySelector('.personal-info ul');
    personalInfoList.innerHTML = `
        <li><strong>العمر:</strong> ${personalData.age}</li>
        <li><strong>المدينة:</strong> ${personalData.city}</li>
        <li><strong>البريد الإلكتروني:</strong> ${personalData.email}</li>
    `;

    // تحديث النبذة
    document.querySelector('.about-me p').textContent = personalData.about;

    // تحديث المهارات
    const skillsList = document.querySelector('.skills ul');
    skillsList.innerHTML = personalData.skills
        .map(skill => `<li>${skill}</li>`)
        .join('');

    // تحديث روابط التواصل الاجتماعي
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = personalData.socialMedia.facebook;
    socialLinks[1].href = personalData.socialMedia.twitter;
    socialLinks[2].href = personalData.socialMedia.instagram;
}

// تشغيل الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', updatePageContent); 